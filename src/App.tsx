import React from 'react';
import NavbarMenu from './components/NavbarMenu';
import ContentWrapper from './components/contentWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <NavbarMenu/>
      <ContentWrapper/>
    </div>
  );
}

export default App;
