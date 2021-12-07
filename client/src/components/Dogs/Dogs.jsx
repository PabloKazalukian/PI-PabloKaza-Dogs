import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import Dog from "../Dog/Dog";
import {getDogs,sort,getTemperament,filterTemp,sortWeigth} from '../../redux/actions/index';
import Loading from "../Loading/Loading.jsx";

import {Doggies,OrderDog,TitleError,ContainError,Error} from './Dogs'

function Dogs(props){

    const [page,setPage] = useState([]);//post
    const [loading,setLoading] = useState((false));
    const [currentPage,setCurrentPage] = useState(1);
    const [cantPage,setCantPage] = useState(8);//postPerPage
    

    const dog1 = useSelector(state => state.dog);
    const temp = useSelector(state => state.temp);
    const err = useSelector(state => state.error);


    const dispatch = useDispatch();
    useEffect(()=>{
        if(!err){    
            setLoading(false);
            dispatch(getDogs());
            dispatch(getTemperament());
            dispatch(sort('ascendente'));
            setPage(dog1);
            setLoading(true);
        }
    },[])
    useEffect(()=>{
        if(!err){
            setLoading(false);        
            setPage(dog1);
            setCurrentPage(1);
            setLoading(true);
        }
            
    },[dog1])
    function selectionChange(e){
        if(e.target.value==='none') {dispatch(getDogs());}
        else {dispatch(sort(e.target.value))};
    }
    function changeTemp(e){
        if(e.target.value === 'all') {
            dispatch(getDogs());
        }
        dispatch(filterTemp(e.target.value));
    }

    function selectionChangeWeigth(e){
        if(e.target.value==='none'){dispatch(getDogs())}
        else {dispatch(sortWeigth(e.target.value))};
    }

    //Get current post ,Pagination
    const indexOfLastPage = currentPage * cantPage;
    const indexOfFirstPage = indexOfLastPage - cantPage;
    const currentPost = page.slice(indexOfFirstPage,indexOfLastPage);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    function restart  (){
        dispatch(getDogs());
    }
    return (
        <div>
            
            <OrderDog > 
                <p>Filter By:</p>
                <select name='selectFilter' onChange={changeTemp}  >
                    <option disabled selected>select</option>
                    <option value='all'label={'all Temperaments'}/>
                    
                    { temp && temp.map( (temp)=>{

                        return <option key={temp.id} value={temp.name} label={temp.name}/>
                        
                    })}
                </select>                

                <p>Sort by weight:</p>
                <select name='select' onChange={selectionChangeWeigth} >
                    <option disabled selected>select</option>
                    <option value='none'label={'none'}/>
                    <option value="mayor" label='higher to lower'></option>
                    <option value="menor" label='lower to higher'></option>
                </select>

                <p>Sort by alphabet:</p>
                <select name='select' onChange={selectionChange} >
                    <option disabled selected>select</option>
                    <option value='none'label={'none'}/>
                    <option value="ascendente" label='ascendant'></option>
                    <option value="descendente" label='descendent'></option>
                </select>
                
            </OrderDog>
            { !err ?
            <>
            <Pagination
                cantPage={cantPage}
                totalPage={page.length}
                paginate={paginate}
            />
            <Doggies>
                {
                !loading?
                <Loading/>
                :currentPost?.map((dog)=>{
                    return <Dog name={dog.name} 
                    height={dog.height}
                    weight={dog.weight}
                    temperament={dog.temperament}
                    images={dog.images}
                    key={dog.id} 
                    id={dog.id} />
                })}
            </Doggies>

            <Pagination
                cantPage={cantPage}
                totalPage={page.length}
                paginate={paginate}
                />
                </>
                :  
                <ContainError>
                    <TitleError>Dog Not Found</TitleError> 
                    <img src='https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'/>
                    <Error onClick={restart} >Return</Error>
                </ContainError> 
            }
                
        
        
        </div>
    )

}

export default Dogs;