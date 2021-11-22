import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs,getDog} from '../../redux/actions/index';



function Dog(props){
    const [dogs,setDogs] = useState();
    const dogss = useSelector(state => state.dog);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDog())
    },[dispatch])
    return (
        <div>
            <div>
                <h1>Dog</h1>
            </div>
        </div>
    )
}

export default Dog;