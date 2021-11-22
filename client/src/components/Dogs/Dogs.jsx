import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs} from '../../redux/actions/index';
import Dog from "../Dog/Dog";



function Dogs(props){
    const [dogs,setDogs] = useState();
    const dogss = useSelector(state => state.dogs);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[dispatch])
    return (
        <div>
            {
                dogss && dogss.map((dog)=>{
                    return <Dog name={dog.name} 
                    height={dog.height}
                    weight={dog.weight}
                    temperament={dog.temperament} />
                })
            }
            
        </div>
    )
}

export default Dogs;