import React from "react";
import { useState,useEffect } from "react";
import {useParams} from 'react-router'
import {Doggi} from '../Dog/imgDog';
import {DogDetail} from './DogsDetail'


function Dog(){

    const[dog,SetDog] = useState(null)
    let {id} = useParams();

    // let dog='';
    //datazo, useEffect no puede ser async, aca lo manejo con el then
    useEffect(()=>{
        fetch(`http://localhost:3001/api/dogs/${id}`)
        .then(r => r.json())
        .then(json=>{SetDog({
            ...dog,
            dog: json
        })})
        .catch(err=>{console.log(err);})
    },[])
    console.log(dog);
    const imgg = 'https://cdn2.thedogapi.com/images/';
    return (
        <div>

            { 
                dog ?
                <>
                <DogDetail>
                    <h4>{dog.dog.name}</h4>
                    <img style={{width: '150px'}} 
                        src={`${imgg}${dog.dog.reference_image_id}.jpg`} 
                        alt={dog.dog.name}
                        onError={(e)=>{
                            e.target.onError = null;
                            e.target.src= 'https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'
                        }}/>
                    <h2>Tamaño: </h2>
                    <p>Metrico: {dog.dog.height.metric} Cm</p>
                    <p>Imperial: {dog.dog.height.imperial} ''</p>

                    <h2>Peso:</h2>
                    <p>Metrico: {dog.dog.weight.metric} Kg</p>
                    <p>Imperial: {dog.dog.weight.imperial} </p>

                    <p>Temperamento: {dog.dog.temperament}</p>
                    <p>Origen: {dog.dog.origin}</p>
                    <p>life_span: {dog.dog.life_span}</p>
                    <p>bred_for: {dog.dog.bred_for}</p>
                    <p>breed_group: {dog.dog.breed_group}</p>

                    
                </DogDetail>
                </> :                
                <h1>Loading</h1>
            }
            
           
        </div>
    )
}

export default Dog;