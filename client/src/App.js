import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route } from "react-router-dom";
import Dogs from './components/Dogs/Dogs';
import Dog from './components/Dog/Dog';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Route exact path={'/api/dogs'} component={Dogs}/>
      <Route exact path={'/api/dog'} component={Dog}/>
    </React.Fragment>
  );
}

export default App;
