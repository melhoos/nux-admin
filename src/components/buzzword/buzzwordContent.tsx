import React from 'react';
import BuzzwordItem from './buzzwordItem';
import Buzzword from '../../interfaces/buzzword';
import BuzzwordNewWrapper from './buzzwordNewWrapper';

interface Props {
    buzzwords: Buzzword[]
}

const BuzzwordContent = (props: Props) => {
    const {buzzwords} = props;
    return (
        <>
            <BuzzwordNewWrapper/>
            {buzzwords.map((bw: Buzzword) => <BuzzwordItem buzzword={bw} key={bw.Id}/>)}
        </>
    )
}

export default BuzzwordContent