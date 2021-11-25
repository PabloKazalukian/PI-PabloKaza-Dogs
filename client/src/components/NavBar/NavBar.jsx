import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import {getDog} from '../../redux/actions/index';

import {Lin,NaviBar,SearchBar,NavUl,InputBar,ButtonBar} from './NavegationBar.js'

export default function NavBar(){
    const dispatch = useDispatch();
    const initialState ={
        dogSearch: ""
    }
    const [state,setstate] = useState(initialState);
    
    const handleState = (e) =>{
        setstate({
          ...state,
          [e.target.name]: e.target.value
        });
      }

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        dispatch(getDog(state));
      }

    return (
        <header className="navBar">
            <NaviBar>
                <NavUl>
                    <Lin to={'/'}>Home</Lin>
                    <SearchBar onSubmit={handleSubmit}>
                        <InputBar 
                            type="text"
                            name='dogSearch'
                            onChange={handleState}
                            value={state.dogSearch}
                            type="search" />
                        <ButtonBar type="submit" value="buscar perros"/>
                    </SearchBar>
                    <Lin to={'/Api'}>Perritos Drogados</Lin>
                </NavUl>
            </NaviBar>
        </header>
    )
}