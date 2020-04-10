import React, {useState, useEffect} from 'react';
import {getBuzzwords} from './buzzwordService';
import BuzzwordContent from './buzzwordContent';
import Buzzword from '../../interfaces/buzzword';
import {Service, ConnectionStatus} from '../../utility/service';
import {onLoading, onError, onNotFound} from '../shared/serviceResponses';

const onSuccess = (bws: Buzzword[]) => {
    return bws.length > 0 ? <BuzzwordContent buzzwords={bws}/> : onNotFound();
}

const BuzzwordWrapper = () => {
    const [buzzwords, setBuzzwords] = useState<Service<Buzzword[]>>({status: ConnectionStatus.LOADING})
    
    useEffect(() => {
        getBuzzwords().then((bw) => setBuzzwords(bw))
    },[])
    
    return (
        <>
            <h1>Faguttrykk</h1>
            {buzzwords.status === ConnectionStatus.LOADING && onLoading()}
            {buzzwords.status === ConnectionStatus.SUCCESS && onSuccess(buzzwords.payload)} 
            {buzzwords.status === ConnectionStatus.ERROR && onError()}
        </>
    )
}

export default BuzzwordWrapper