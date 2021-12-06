import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { Redirect,useLocation  } from "react-router";
import {getDog,getDogs} from '../../redux/actions/index';

import {Lin,NaviBar,SearchBar,NavUl,InputBar,ButtonBar,Lupa} from './NavegationBar.js'
import {HiSearch} from 'react-icons/hi'


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
    function restart  (){
        dispatch(getDogs());
    }

    return (
        <header className="navBar">
            <NaviBar>
                <NavUl>
                    {/* <Lin to={'/'}>Home</Lin> */}
                    <Lin onClick={restart} to={'/Api'}>Doggi </Lin>
                    { pathname.toLowerCase() === '/api' ?
                        <SearchBar onSubmit={handleSubmit}>
                            <InputBar 
                                type="text"
                                name='dogSearch'
                                onChange={handleState}
                                value={state.dogSearch}
                                type="search" />
                            <ButtonBar type="submit" value='Search'></ButtonBar>
                            <Lupa><HiSearch/></Lupa>
                            
                        </SearchBar>
                        : <p/> 
                    }
                    <Lin to={'/Api/Form'}>Add a Dog</Lin>

                </NavUl>
            </NaviBar>
        </header>
    )
}