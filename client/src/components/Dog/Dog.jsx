import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs,getDog} from '../../redux/actions/index';
import {Doggi} from './imgDog';



function Dog(props){
    return (
        <div>
            <Doggi>
                <h4>{props.name}</h4>
                <img style={{width: '150px'}} 
                    src={`https://cdn2.thedogapi.com/images/${props.images}.jpg`} 
                    alt={props.name}
                    onError={(e)=>{
                        e.target.onError = null;
                        e.target.src= 'https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'
                    }}/>
                <p>Tamaño: {props.height} Cm</p>
                <p>Peso: {props.weight} Kg</p>
                <p>Temperamento: {props.temperament}</p>
            </Doggi>
        </div>
    )
}

export default Dog;