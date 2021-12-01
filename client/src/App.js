import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route,Switch } from "react-router-dom";
import Dogs from './components/Dogs/Dogs.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import DogsDetail from './components/DogsDetail/DogsDetail.jsx'
import DogForm from './components/DogForm/DogForm.jsx'
import Error404 from './components/Error404/Error404.jsx'


function App() {
  return (
    <React.Fragment>
      <Route path={'/Api'} component={ NavBar}/>
      <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route exact path={'/Api/search/:id'} component={DogsDetail}/>      
        <Route exact path={'/Api/'} component={Dogs}/>
        <Route exact path={'/Api/Form'} component={DogForm}/>
        <Route path="*" component={Error404} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
