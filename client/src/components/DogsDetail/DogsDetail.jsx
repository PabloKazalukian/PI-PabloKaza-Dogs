import React from "react";
import { useState,useEffect } from "react";
import {useParams} from 'react-router'
import Loading from '../Loading/Loading.jsx'

import {DogDetail,Container,DogDescription,DogImg,
    Desc,Heigth,Weigth,Temperament,Others} from './DogsDetail'


function Dog(){

    const[state,SetDog] = useState(null)
    let {id} = useParams();

    // let dog='';
    //datazo, useEffect no puede ser async, aca lo manejo con el then
    useEffect(()=>{
        fetch(`http://localhost:3001/api/dogs/${id}`)
        .then(r => r.json())
        .then(json=>{SetDog({
            ...state,
            dog: json
        })})
        .catch(err=>{console.log(err);})
    },[])
    const imgg = 'https://cdn2.thedogapi.com/images/';
    let imggs = '';
    if(state?.dog?.images){
        imggs = state.dog.images;
    }
    let desc = 'desconocido';
    return (
        <div>

            { 
                state ?
                <>
                <Container>
                    <DogDetail>
                        <DogImg>
                            <img 
                                src={state.dog.reference_image_id?`${imgg}${state.dog.reference_image_id}.jpg`:imggs}
                                alt={state.dog.name}
                                onError={(e)=>{
                                    e.target.onError = null;
                                    e.target.src= 'https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'
                                }}/>
                            <h4>{state.dog.name}</h4>
                        </DogImg>
                        <DogDescription>
                            <Desc>
                                <h2>Description</h2>
                            </Desc>
                            <Heigth>
                                <h2>Tamaño: </h2>
                                <p>{state.dog.height.metric? 
                                state.dog.height.metric:
                                state.dog.height } Cm</p>
                            </Heigth>
                            <Weigth>
                                <h2>Peso:</h2>
                                <p>{state.dog.weight.metric?
                                 state.dog.weight.metric: 
                                 state.dog.weight} Kg</p>
                            </Weigth>
                            <Temperament>
                                <h2>Temperamento:</h2>
                                <p>{state.dog.temperament?
                                 state.dog.temperament:
                                 state.dog.temperaments?.map(e=>{ return e.name}).join(', ') }</p>
                            </Temperament>
                            <Others>
                                <p>Origen: {state.dog.origin? state.dog.origin : desc }</p>
                                <p>Esperanza de vida: {state.dog.life_span? state.dog.life_span : desc}</p>
                                <p>Criado Para: {state.dog.bred_for? state.dog.bred_for : desc}</p>
                                <p>Grupo de Raza: {state.dog.breed_group? state.dog.breed_group : desc}</p>
                            </Others>
                        </DogDescription>                        
                    </DogDetail>
                </Container>
                </> :                
                <Loading/>

            }
            
           
        </div>
    )
}

export default Dog;