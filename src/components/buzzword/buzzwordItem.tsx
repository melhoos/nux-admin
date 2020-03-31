import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Buzzword from '../../interfaces/buzzword';
import BuzzwordForm from './buzzwordForm';
import {deleteData} from './buzzwordService';
import {faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface Props {
    buzzword: Buzzword
}

const deleteBw = (bw: Buzzword) => {
    deleteData(bw.Id);
}

const onDelete = (bw: Buzzword) => {
    const res = window.confirm(`Er du sikker på at du vil slette ${bw.Title}?`);
    if (res) { // user pressed Ok
        deleteBw(bw);
        window.location.reload();
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
                <p className="data-content">{buzzword.Description}</p>
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