import React from 'react';
import Menu from './components/menu';
import ContentWrapper from './components/contentWrapper';
import {PageProvider} from './providers/pageProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <PageProvider>
    <div className="App">
      <Menu/>
      <ContentWrapper/>
    </div>
    </PageProvider>
  );
}

export default App;
