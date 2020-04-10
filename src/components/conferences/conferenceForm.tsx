import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Conference from '../../interfaces/conference';
import {postConference, putConference} from './conferenceService'
import {reloadOnSuccess} from '../../utility/serviceHelpers';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faTimes} from '@fortawesome/free-solid-svg-icons';

interface Props {
    conference?: Conference,
    onClose: () => void,
}

const emptyConference: Conference = {
    Id: 0,
    Name: "",
    Description: "",
    City: "",
    Country: "",
    StartDate: "",
    EndDate: "", 
    URL: ""
} 

function areFieldsEmpty (c: Conference) : boolean { //todo
    return (c.Name.length === 0 || c.Description.length === 0 || c.StartDate.length === 0 )
}

const ConferenceForm = ({conference = emptyConference, onClose}: Props) => {
    const [editedC, setEditedC] = useState(conference)
    const isEmpty = conference === emptyConference
    
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>, label: string) => { 
        const newValue = e.target.value;
        let updated = {...editedC, [label]: newValue};
        setEditedC(updated)
    }

    const onSave = (e: React.MouseEvent<HTMLElement> ) => {
        e.preventDefault();
        if (isEmpty) { // post
            postConference(editedC).then((resp) => { reloadOnSuccess(resp) })
        } else { // update
            putConference(editedC).then((resp) => { reloadOnSuccess(resp) })
        }
    }

    const dateValue = (d: string) => {
        return d.includes('T') ? d.split('T')[0] : undefined
    }

    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" as="input" placeholder="Name*" value={editedC.Name} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "Name")}/>
                <Form.Control type="text" as="textarea" placeholder="Description*" value={editedC.Description} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "Description")}/>
                <Form.Control type="text" as="input" placeholder="City" value={editedC.City} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "City")}/>
                <Form.Control type="text" as="input" placeholder="Country" value={editedC.Country} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "Country")}/>
                <span className="date-form">
                    <span className="date-form-item">
                        <label htmlFor="startdate">Start Date*: </label>
                        <Form.Control type="date" as="input" id="startdate" placeholder="StartDate" value={dateValue(editedC.StartDate)} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "StartDate")}/>
                    </span>
                    <span className="date-form-item">
                        <label htmlFor="enddate">End Date: </label>
                        <Form.Control type="date" as="input" id="enddate" placeholder="StartDate" value={dateValue(editedC.EndDate)} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "EndDate")}/>
                    </span>
                </span>
                <Form.Control type="text" as="input"  placeholder="URL" value= {editedC.URL} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e, "URL")}/>
            </Form.Group>
            <Button variant="outline-primary" type="submit" onClick={(e: React.MouseEvent<HTMLElement> ) => onSave(e)} title="Lagre" disabled={areFieldsEmpty(editedC)}> 
                <FontAwesomeIcon icon={faSave} />
            </Button>
            <Button variant="outline-secondary" className="close-btn" onClick={onClose} title="Lukk"> 
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </Form>
    )
}

export default ConferenceForm;