import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Conference from '../../interfaces/conference';
import {faPencilAlt, faTrashAlt, faAlignJustify, faMapPin, faCalendarAlt, faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ConferenceForm from './conferenceForm';
import {months} from '../../utility/dateHelpers';
import {deleteConference} from './conferenceService';
import {reloadOnSuccess} from '../../utility/serviceHelpers';

interface Props {
    conference: Conference
}

const onDelete = (c: Conference) => {
    const res = window.confirm(`Er du sikker på at du vil slette ${c.Name}?`);
    if (res) { // user pressed Ok
        deleteConference(c.Id).then((resp => { reloadOnSuccess(resp) }))
    } else {} //  user pressed cancel
}

const formatConfDates = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (start === end) {
        const month = months[startDate.getMonth()];
        return `${startDate.getDate()}.${month} ${startDate.getFullYear()}`
    } else if (startDate.getMonth() === endDate.getMonth()) { // assume they are in the same year
        const month = months[startDate.getMonth()];
        return `${startDate.getDate()}. - ${endDate.getDate()}.${month} ${startDate.getFullYear()}`
    } else { // not the same month or same date
        const startMonth = months[startDate.getMonth()];
        const endMonth = months[endDate.getMonth()];
        return `${startDate.getDate()}.${startMonth} - ${endDate.getDate()}.${endMonth} ${startDate.getFullYear()}`
    }
}

const ConferenceItem = (props: Props) => {
    const [editMode, setEditMode] = useState(false);
    const {conference} = props;

    const editAndDeleteBtns = () => {
        return !editMode && (
            <div className="data-btns">
                <Button variant="outline-primary" onClick={() => setEditMode(!editMode)} title="Endre" > 
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
                <Button variant="outline-danger" onClick={() => onDelete(conference)} title="Slett"> 
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
        )
    }

    const passiveContent = () => {
        return (
            <>
                <h2>{conference.Name}</h2>
                <p> <FontAwesomeIcon className="data-icon" icon={faAlignJustify} /> {conference.Description} </p>
                <p> <FontAwesomeIcon className="data-icon" icon={faMapPin} /> {conference.City}, {conference.Country} </p>
                <p> <FontAwesomeIcon className="data-icon" icon={faCalendarAlt} /> {formatConfDates(conference.StartDate, conference.EndDate)} </p>
                <p> <FontAwesomeIcon className="data-icon" icon={faGlobeEurope} /> <a href={conference.URL} target="_blank" rel="noopener noreferrer">{conference.URL}</a> </p>
            </>
        )
    }
    
    return (
        <div className="data-item" key={conference.Id}>
            <div className="data-content">
                {!editMode && passiveContent()}
                {editMode && (<ConferenceForm conference={conference} onClose={() => setEditMode(false)}/>)}
            </div>
            {editAndDeleteBtns()}
        </div>
    )    
}

export default ConferenceItem