import React from 'react';
import ConferenceItem from './conferenceItem';
import ConferenceNewWrapper from './conferenceNewWrapper';
import Conference from '../../interfaces/conference';

interface Props {
    conferences: Conference[]
}

// todo: add button to sort conference by name
const ConferenceContent = (props: Props) => {
    const {conferences} = props;
    return (
    <>
        <ConferenceNewWrapper/>
        {conferences.map((c: Conference) => <ConferenceItem conference={c} key={c.Id}/>)}
    </>
    )
}

export default ConferenceContent