import React, {useState, useEffect} from 'react';
import Conference from '../../interfaces/conference';
import {getConferences} from './conferenceService';
import {Service, ConnectionStatus} from '../../utility/service';
import {onLoading, onError, onNotFound} from '../shared/serviceResponses';
import ConferenceContent from './conferenceContent';

const onSuccess = (cs: Conference[]) => {
    return cs.length > 0 ? <ConferenceContent conferences={cs}/> : onNotFound();
}

const ConferenceWrapper = () => {
    const [conferences, setConferences] = useState<Service<Conference[]>>({status: ConnectionStatus.LOADING})
    
    useEffect(() => {
        getConferences().then((c) => setConferences(c))
    },[])
    
    return (
        <>
            <h1>Konferanser</h1>
            {conferences.status === ConnectionStatus.LOADING && onLoading()}
            {conferences.status === ConnectionStatus.SUCCESS && onSuccess(conferences.payload)} 
            {conferences.status === ConnectionStatus.ERROR && onError()}
        </>
    )
}

export default ConferenceWrapper