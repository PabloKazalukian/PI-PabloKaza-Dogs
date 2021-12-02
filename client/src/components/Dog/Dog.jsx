import React, { useEffect } from "react";

import {LinkDog,Doggi,DogDiv,DogInfo} from './DogCard';
import {HiSearch} from 'react-icons/fa'


function Dog(props){
    let imggs=`https://cdn2.thedogapi.com/images/${props.images}.jpg`; 
    if(props.images?.length > 15){
        imggs = props.images;
    } 
    return (
       
            <Doggi>
                <DogDiv>
                    <img 
                        src={imggs} 
                        alt={props.name}
                        onError={(e)=>{
                            e.target.onError = null;
                            e.target.src= 'https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'
                        }}/>
                </DogDiv>
                <DogInfo>
                    <h4>{props.name}</h4>
                    <p>Tamaño: {props.height} Cm</p>
                    <p>Peso: {props.weight} Kg</p>
                    <p>Temperamento: {props.temperament}</p>
                    <LinkDog to={`/api/search/${props.id}`}> Ver Mas</LinkDog>
                </DogInfo>
            </Doggi>
       
    )
}

export default Dog;