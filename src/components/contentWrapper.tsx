import React from 'react';
import BuzzwordWrapper from './buzzword/buzzwordWrapper';
import ConferenceWrapper from './conferences/conferenceWrapper';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import '../styles/content.scss';

const ContentWrapper = () => {
    return ( 
        <div className="content">
            <Router>
                <Switch>
                    <Route path="/buzzwords" component={BuzzwordWrapper} />
                    <Route path="/conferences" component={ConferenceWrapper} />
                    <Route path="/" component={BuzzwordWrapper} />
                </Switch>
            </Router>
        </div>
    )
}

export default ContentWrapper