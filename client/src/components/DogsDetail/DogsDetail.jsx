import React from "react";
import { useState,useEffect } from "react";
import {useParams} from 'react-router'
import Error404 from "../Error404/Error404.jsx";
import Loading from '../Loading/Loading.jsx'

import {DogDetail,Container,DogDescription,DogImg,
    Desc,Heigth,Weigth,Temperament,Others} from './DogsDetail'


function Dog(){

    const[state,SetDog] = useState(null);
    const[error,setError]= useState(null)
    let {id} = useParams();

    // let dog='';
    //datazo, useEffect no puede ser async, aca lo manejo con el then
    useEffect(()=>{
        fetch(`http://localhost:3001/api/dogs/${id}`)
        .then(r =>{ 
            if(!r.ok){
                throw Error('could not fetch the data for that resource');
            } 
            return r.json()})
        .then(json=>{SetDog({
            ...state,
            dog: json
        })})
        .catch(err=>{ 
            setError(err.message)})
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
                error ? <Error404/>
                :state ?
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
                                <h2>Height: </h2>
                                <p>{state.dog.height.metric? 
                                state.dog.height.metric:
                                state.dog.height } Cm</p>
                            </Heigth>
                            <Weigth>
                                <h2>Weight:</h2>
                                <p>{state.dog.weight.metric?
                                 state.dog.weight.metric: 
                                 state.dog.weight} Kg</p>
                            </Weigth>
                            <Temperament>
                                <h2>Temperaments:</h2>
                                <p>{state.dog.temperament?
                                 state.dog.temperament:
                                 state.dog.temperaments?.map(e=>{ return e.name}).join(', ') }</p>
                            </Temperament>
                            <Others>
                                <p>Origin: {state.dog.origin? state.dog.origin : desc }</p>
                                <p>Life expectancy: {state.dog.life_span? state.dog.life_span : desc}</p>
                                <p>Breed For: {state.dog.bred_for? state.dog.bred_for : desc}</p>
                                <p>Breed Group: {state.dog.breed_group? state.dog.breed_group : desc}</p>
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