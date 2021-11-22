import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route } from "react-router-dom";
import Dogs from './components/Dogs/Dogs';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Route path='/api' components={Dogs}/>
    </React.Fragment>
  );
}

export default App;
