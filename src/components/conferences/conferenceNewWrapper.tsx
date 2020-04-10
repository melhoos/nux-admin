import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ConferenceForm from './conferenceForm';

const ConferenceNewWrapper = () => {
    const [showNewForm, setShowNewForm] = useState(false)

    const newConferenceContent = () => {
        if (showNewForm) {
            return (
                <div className="data-item">
                    <div className="data-content">
                        <ConferenceForm onClose={() => setShowNewForm(false)}/>
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
            {newConferenceContent()}
        </>
    )
}

export default ConferenceNewWrapper