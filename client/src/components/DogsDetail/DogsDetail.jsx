import React from "react";
import { useState,useEffect } from "react";
import {useParams} from 'react-router'
import {Doggi} from '../Dog/imgDog';


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
    return (
        <div>

            { 
                dog ?
                <>
                <Doggi>
                    <h4>{dog.dog.name}</h4>
                    <img style={{width: '150px'}} 
                        src={`https://cdn2.thedogapi.com/images/${dog.dog.reference_image_id}.jpg`} 
                        alt={dog.dog.name}
                        onError={(e)=>{
                            e.target.onError = null;
                            e.target.src= 'https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'
                        }}/>
                    <p>Tamaño: {dog.dog.height.metric} Cm</p>
                    <p>Peso: {dog.dog.weight.metric} Kg</p>
                    <p>Temperamento: {dog.dog.temperament}</p>
                </Doggi>
                </> :
                <h1>Loading</h1>
            }
            
           
        </div>
    )
}

export default Dog;