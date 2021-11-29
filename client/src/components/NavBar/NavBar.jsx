import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { Redirect,useLocation  } from "react-router";
import {getDog} from '../../redux/actions/index';

import {Lin,NaviBar,SearchBar,NavUl,InputBar,ButtonBar} from './NavegationBar.js'

export default function NavBar(){
    const dispatch = useDispatch();
    const initialState ={
        dogSearch: ""
    }
    const {pathname} = useLocation(); 
    
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
                    { pathname.toLowerCase() === '/api' ?
                        <SearchBar onSubmit={handleSubmit}>
                            <InputBar 
                                type="text"
                                name='dogSearch'
                                onChange={handleState}
                                value={state.dogSearch}
                                type="search" />
                            <ButtonBar type="submit" value="buscar perros"/>
                        </SearchBar>
                        : <h4>E</h4>
                    }
                    <Lin to={'/Api'}>Perritos </Lin>
                    <Lin to={'/Api/Form'}>Agregar </Lin>

                </NavUl>
            </NaviBar>
        </header>
    )
}