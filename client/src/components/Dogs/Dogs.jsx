import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs} from '../../redux/actions/index';



function Dogs(props){
    const [dogs,setDogs] = useState();
    const dogss = useSelector(state => state.dogs);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch])
    return (
        <div>
            <div>
                <h1>casacol</h1>
            </div>
        </div>
    )
}

export default Dogs;