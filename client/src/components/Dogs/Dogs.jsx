import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getDogs,sort,getTemperament,filterTemp,sortWeigth} from '../../redux/actions/index';
import Pagination from "../Pagination/Pagination.jsx";
import Dog from "../Dog/Dog";
import {OrderDog,Doggies,PaginationDog,ButtonDog} from './DogsComp'


function Dogs(props){

    const [page,setPage] = useState([]);//post
    const [loading,setLoading] = useState((false));
    const [currentPage,setCurrentPage] = useState(1);
    const [cantPage,setCantPage] = useState(8);//postPerPage
    

    const dogss = useSelector(state => state.dogs);
    const dog1 = useSelector(state => state.dog);
    const temp = useSelector(state => state.temp);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperament());
        dispatch(sort('ascendente'));
        setLoading(true);
        setPage(dog1);

    },[])
    useEffect(()=>{
        setLoading(true);
        setPage(dog1);

    },[dog1])
    function selectionChange(e){
        dispatch(sort(e.target.value));
    }
    function changeTemp(e){
        if(e.target.value === 'Selecciona una opción') {
            dispatch(getDogs());
        }
        dispatch(filterTemp(e.target.value));
    }

    function selectionChangeWeigth(e){
        dispatch(sortWeigth(e.target.value));
    }

    //Get current post ,Pagination
    const indexOfLastPage = currentPage * cantPage;
    const indexOfFirstPage = indexOfLastPage - cantPage;
    const currentPost = page.slice(indexOfFirstPage,indexOfLastPage);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return (
        <div>
             
            <OrderDog > 
                <p>Filtrar Por:</p>
                <select name='selectFilter' onChange={changeTemp}  >

                    <option value='Selecciona una opción'
                            label={'Selecciona una opción'}/>
                    
                    { temp && temp.map( (temp)=>{

                        return <option value={temp.name} label={temp.name}/>
                        
                    })}
                </select>
                

                <p>Ordenamiento Por Peso:</p>
                <select name='select' onChange={selectionChangeWeigth} >
                    <option disabled selected>Selecciona una opción</option>
                    <option value="mayor" label='mayor a menor'></option>
                    <option value="menor" label='menor a mayor'></option>
                </select>

                <p>Ordenamiento Alfabetico:</p>
                <select name='select' onChange={selectionChange} >
                    <option disabled selected>Selecciona una opción</option>
                    <option value="ascendente" label='Ascendente'></option>
                    <option value="descendente" label='Descendente'></option>
                </select>
                
            </OrderDog>
            <Pagination
                cantPage={cantPage}
                totalPage={page.length}
                paginate={paginate}
            />
            <Doggies>
            {
                currentPost && currentPost.map((dog)=>{
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