import React, {useState} from 'react';
import BuzzwordForm from './buzzwordForm';
import Button from 'react-bootstrap/Button';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BuzzwordNewWrapper = () => {
    const [showNewForm, setShowNewForm] = useState(false)

    const newBuzzwordContent = () => {
        if (showNewForm) {
            return (
                <div className="data-item">
                    <div className="data-content">
                        <BuzzwordForm onClose={() => setShowNewForm(false)}/>
                    </div>
                </div>
            )
        } else { return (<></>)}
    }

    return (
        <>
            <Button variant="outline-success" onClick={() => setShowNewForm(!showNewForm)} title="Ny"> 
                <FontAwesomeIcon icon={faPlus} />
            </Button>
            {newBuzzwordContent()}
        </>
    )
}

export default BuzzwordNewWrapper