import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs,getDog} from '../../redux/actions/index';



function Dog(props){
    const [dogs,setDogs] = useState();
    const dogss = useSelector(state => state.dogs);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[]);
    console.log(dogss)
    return (
        <div>
            <h4>{props.name}</h4>
            <p>Tamaño: {props.height} Cm</p>
            <p>Peso: {props.weight} Kg</p>
            <p>Temperamento: {props.temperament}</p>

        </div>
    )
}

export default Dog;