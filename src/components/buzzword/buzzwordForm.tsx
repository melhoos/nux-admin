import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Buzzword from '../../interfaces/buzzword';
import {putBuzzword, postBuzzword} from './buzzwordService';
import {reloadOnSuccess} from '../../utility/serviceHelpers';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faTimes} from '@fortawesome/free-solid-svg-icons';

interface Props {
    buzzword?: Buzzword,
    onClose: () => void,
}

const emptyBuzzWord: Buzzword = {
    Id: 0,
    Title: '',
    Description: ''
}

function areFieldsEmpty (bw: Buzzword) : boolean {
    return (bw.Title.length === 0 || bw.Description.length === 0)
}

const BuzzwordForm = ({buzzword = emptyBuzzWord, onClose}: Props) => {
    const [editedBW, setEditedBW] = useState(buzzword)
    const isEmpty = buzzword === emptyBuzzWord
    
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>, label: string) => { 
        const newValue = e.target.value;
        let updated = {...editedBW, [label]: newValue};
        setEditedBW(updated)
    }

    const onSave = (e: React.MouseEvent<HTMLElement> ) => {
        e.preventDefault();
        if (isEmpty) { // post
            postBuzzword(editedBW).then((resp) => { reloadOnSuccess(resp) })
        } else { // update
            putBuzzword(editedBW).then((resp) => { reloadOnSuccess(resp) })
        }
    }

    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" as="input" placeholder="Title*" value={editedBW.Title} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "Title")}/>
                <Form.Control type="text" as="textarea" placeholder="Description*" value={editedBW.Description} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "Description")} />
            </Form.Group>
            <Button variant="outline-primary" type="submit" onClick={(e: React.MouseEvent<HTMLElement> ) => onSave(e)} title="Lagre" disabled={areFieldsEmpty(editedBW)}> 
                <FontAwesomeIcon icon={faSave} />
            </Button>
            <Button variant="outline-secondary" className="close-btn" onClick={onClose} title="Lukk"> 
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </Form>
    )
}

export default BuzzwordForm