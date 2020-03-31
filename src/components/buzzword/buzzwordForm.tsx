import React, {useState} from 'react';
import Buzzword from '../../interfaces/buzzword';
import Form from 'react-bootstrap/Form';
import {postData, putData} from './buzzwordService';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faTimes} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

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

    const onChangeTitle = (e: React.ChangeEvent<HTMLSelectElement>) => { 
        const newTitle = e.target.value;
        const updated = {...editedBW, Title: newTitle}
        setEditedBW(updated)
    }

    const onChangeDesc = (e: React.ChangeEvent<HTMLSelectElement>) => { 
        const newDesc = e.target.value;
        const updated = {...editedBW, Description: newDesc}
        setEditedBW(updated)
    }

    const onSave = () => {
        if (isEmpty) { // post
            postData(editedBW.Title, editedBW.Description)
        } else { // update
            putData(editedBW)
        }
    }

    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Title" value={editedBW.Title} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChangeTitle(e)}/>
                <Form.Control type="text" placeholder="Description" value={editedBW.Description} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChangeDesc(e)} />
            </Form.Group>
            <Button variant="outline-primary" type="submit" onClick={onSave} title="Lagre" disabled={areFieldsEmpty(editedBW)}> 
                <FontAwesomeIcon icon={faSave} />
            </Button>
            <Button variant="outline-secondary" className="close-btn" onClick={onClose} title="Lukk"> 
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </Form>
    )
}

export default BuzzwordForm