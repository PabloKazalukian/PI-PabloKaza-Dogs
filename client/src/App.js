import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route } from "react-router-dom";
import Dogs from './components/Dogs/Dogs';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import DogsDetail from './components/DogsDetail/DogsDetail.jsx'
import DogsForm from './components/DogForm/DogForm'


function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={LandingPage}/>
      <Route path={'/Api'} component={ NavBar}/>
      <Route exact path={'/Api/:id'} component={DogsDetail}/>      
      <Route exact path={'/Api/'} component={Dogs}/>
      <Route exact path={'/Api/Form'} component={DogsForm}/>

    </React.Fragment>
  );
}

export default App;
