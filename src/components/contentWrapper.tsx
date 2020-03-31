import React, {useContext} from 'react';
import BuzzwordWrapper from './buzzword/buzzwordWrapper';
import {PageContext, Pages} from '../providers/pageProvider';
import '../styles/content.scss';

const renderContent = (pageName: Pages) => {
    switch(pageName) {
        case Pages.Buzzword:
            return (<BuzzwordWrapper/>)
        default:
            return (<></>)
    }
} 

const ContentWrapper = () => {
    const [pageName] = useContext(PageContext)
    return ( 
        <div className="content">
            {renderContent(pageName)}
        </div>
    )
}

export default ContentWrapper