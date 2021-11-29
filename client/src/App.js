import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route } from "react-router-dom";
import Dogs from './components/Dogs/Dogs';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import DogsDetail from './components/DogsDetail/DogsDetail.jsx'
import DogForm from './components/DogForm/DogForm.jsx'


function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={LandingPage}/>
      <Route path={'/Api'} component={ NavBar}/>
      <Route exact path={'/Api/search/:id'} component={DogsDetail}/>      
      <Route exact path={'/Api/'} component={Dogs}/>
      <Route exact path={'/Api/Form'} component={DogForm}/>

    </React.Fragment>
  );
}

export default App;
