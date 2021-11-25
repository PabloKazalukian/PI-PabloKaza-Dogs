import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs,sort} from '../../redux/actions/index';
import Dog from "../Dog/Dog";
import {OrderDog,Doggies} from './DogsComp'


function Dogs(props){
    const [dogs,setDogs] = useState();
    const dogss = useSelector(state => state.dogs);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs())
    },[])
    function selectionChange(e){
        dispatch(sort(e.target.value))
    }
    return (
        <div>
            <OrderDog > 
                <p>Ordenamiento Por:</p>
                <select name='select' onChange={selectionChange} >
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente" >Descendente</option>
                </select>
            </OrderDog>
            <Doggies>
            {
                dogss && dogss.map((dog)=>{
                    return <Dog name={dog.name} 
                    height={dog.height}
                    weight={dog.weight}
                    temperament={dog.temperament}
                    images={dog.images}
                    key={dog.id} 
                    id={dog.id} />

                })
            }
            </Doggies>
            
            
        </div>
    )
}

export default Dogs;