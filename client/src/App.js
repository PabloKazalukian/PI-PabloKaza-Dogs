import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route } from "react-router-dom";
import Dogs from './components/Dogs/Dogs';
import LandingPage from './components/LandingPage/LandingPage'


function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={LandingPage}/>
      <Route path={'/api'} component={ NavBar}/>
      <Route exact path={'/api/dogs'} component={Dogs}/>
    </React.Fragment>
  );
}

export default App;
