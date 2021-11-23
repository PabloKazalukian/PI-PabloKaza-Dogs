import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDog} from '../../redux/actions/index';

import {NaviBar,SearchBar,NavUl,InputBar,ButtonBar} from './NavegationBar.js'

export default function NavBar(){
    const dispatch = useDispatch();
    const dogss = useSelector(state => state.dog);
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
                    <li>Home</li>
                    <SearchBar onSubmit={handleSubmit}>
                        <InputBar 
                            type="text"
                            name='dogSearch'
                            onChange={handleState}
                            value={state.dogSearch}
                            type="search" />
                        <ButtonBar type="submit" value="buscar perros"/>
                    </SearchBar>
                    <li>Perritos Drogados</li>
                </NavUl>
            </NaviBar>
        </header>
    )
}