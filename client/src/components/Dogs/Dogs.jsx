import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs} from '../../redux/actions/index';
import Dog from "../Dog/Dog";
import {Doggies} from './DogsComp'


function Dogs(props){
    const [dogs,setDogs] = useState();
    const dogss = useSelector(state => state.dogs);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[])
    return (
        <div>
            <Doggies>
            {
                dogss && dogss.map((dog)=>{
                    return <Dog name={dog.name} 
                    height={dog.height}
                    weight={dog.weight}
                    temperament={dog.temperament}
                    images={dog.images}
                    key={dog.id} />

                })
            }
            </Doggies>
            
            
        </div>
    )
}

export default Dogs;