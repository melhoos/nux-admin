import React from 'react';
import BuzzwordService from './buzzwordService';
import BuzzwordContent from './buzzwordContent';

const loading = () => {
    return (<div className="loading"> Loading .. </div>)
}

const error = () => {
    return (<div className="error">Errror!</div>)
}

const BuzzwordWrapper = () => {
    const bs = BuzzwordService();

    return (
        <>
            <h1>Buzzwords</h1>
            {bs.status === 'loading' && loading()}
            {bs.status === 'loaded' && <BuzzwordContent buzzwords={bs.payload}/>} 
            {bs.status === 'error' && error()}
        </>
    )
}

export default BuzzwordWrapper