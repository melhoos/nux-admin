import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Buzzword from '../../interfaces/buzzword';
import BuzzwordForm from './buzzwordForm';
import {deleteBuzzword} from './buzzwordService';
import {faPencilAlt, faTrashAlt, faAlignJustify} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {reloadOnSuccess} from '../../utility/serviceHelpers';

interface Props {
    buzzword: Buzzword
}

const onDelete = (bw: Buzzword) => {
    const res = window.confirm(`Er du sikker på at du vil slette ${bw.Title}?`);
    if (res) { // user pressed Ok
        deleteBuzzword(bw.Id).then((resp => { reloadOnSuccess(resp) }))
    } else {} //  user pressed cancel
}

const BuzzwordItem = (props: Props) => {
    const [editMode, setEditMode] = useState(false);
    const {buzzword} = props;

    const editAndDeleteBtns = () => {
        return !editMode && (
            <div className="data-btns">
                <Button variant="outline-primary" onClick={() => setEditMode(!editMode)} title="Endre" > 
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
                <Button variant="outline-danger" onClick={() => onDelete(buzzword)} title="Slett"> 
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
        )
    }

    const passiveContent = () => {
        return (
            <>
                <h2>{buzzword.Title}</h2>
                <p> <FontAwesomeIcon className="data-icon" icon={faAlignJustify} /> {buzzword.Description}</p>
            </>
        )
    }
    
    return (
        <div className="data-item" key={buzzword.Id}>
            <div className="data-content">
                {!editMode && passiveContent()}
                {editMode && (<BuzzwordForm buzzword={buzzword} onClose={() => setEditMode(false)}/>)}
            </div>
            {editAndDeleteBtns()}
        </div>
    )    
}

export default BuzzwordItem