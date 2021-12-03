import React from 'react';
import {useEffect, useState} from 'react'
import { getTemperament} from '../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {FormDoggies,Container,ContainerTemp,CreateDog,CompleteDog
  ,TempShow,DeleteTemp,TempName} from './DogForm';

import {Lin} from '../NavBar/NavegationBar'

const DogForm = () => {
  const dispatch = useDispatch();
  const temp = useSelector(state => state.temp);

  const initialTemp={
    temp: []
  }
  const initialState ={
      name: "",
      height: "",
      weight: "",
      life_span:"",
      images:"",
      temperament:[],
  }

  useEffect(()=>{
    dispatch(getTemperament());
  },[])
  const [state, setstate] = useState(initialState);
  const [tempShow, setTempShow] = useState(initialTemp);
  const [submitComp,setSumbit] = useState(false);


  const handleState = (e) =>{
    setstate({
      ...state,
      [e.target.name]: e.target.value
      });
    }

  const addDogs = (dog) =>{
    return fetch(`http://localhost:3001/api/dog`, {
      method: 'POST',
      body: JSON.stringify(dog),
      headers:{
        'Content-Type': 'application/json'},
      })
      .then(r => r.json())
      // .then(json=>{dispatch({type:ADD_DOG, payload: json});})
      .catch(err=>{
        setSumbit(false);
        alert(err);

      })          
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addDogs(state);
    setSumbit(true);
  }

  //debo mostrar el name, pero solo llevar al back el id de los temperament
  const selectTemp = (e)=>{
    if('Selecciona una opción'!==e.target.value){
      console.log(typeof e.target.value);
      if(!state.temperament.includes(parseInt(e.target.value,10))){

        setstate({
          ...state,
          temperament: [...state.temperament,
            parseInt(e.target.value,10)]
        });
        //obtengo el name de temp,por su id, para mostarlo en pantalla
        let [item] = temp.filter(elem =>{if (elem.id == (e.target.value)){
          return elem.name;
        }});
        //estado para el name de temp
        setTempShow({
          ...tempShow,
          temp: [...tempShow.temp, item.name]
        })
      }else{
        // alert('No vale repetir');
      }
    }
  }
    
  const deleteTemp = (e)=>{
    e.preventDefault();
    //obtengo el id de temp, por su name, para eliminarlo
    let [item] = temp.filter(elem =>{if (elem.name == (e.target.value)){
      return elem.id;
    }});
    setstate({
      ...state,
      temperament: state.temperament.filter(e => e !== item.id )
    });
    setTempShow({
      ...tempShow,
      temp: tempShow.temp.filter(elem => elem !== e.target.value)
    });
  }

  return (
      <Container>
        {submitComp ?
        <>
          <CompleteDog>
              <h2>form completed, dog has been created!</h2>
              <Lin to={'/Api'}>return</Lin>
          </CompleteDog>
        </>
        :
        <FormDoggies onSubmit={handleSubmit}>
            <label>Name: </label>
            <input name='name' onChange={handleState} value={state.name}/>
            <label>Height: </label>
            <input type="number" name='height' onChange={handleState} value={state.height}/>
            <label>Weight: </label>
            <input type="number" name='weight' onChange={handleState} value={state.weight}/>
            <label>Life expectancy: </label>
            <input type="number" name="life_span" onChange={handleState} value={state.life_span} />
            <label>Images: </label>            
            <input name="images" onChange={handleState} value={state.images} />
            <label>Temperament/s: </label>
            <select name='selectTemp' onClick={selectTemp}>
              <option value='Selecciona una opción'
                  label={'Selecciona una opción'}/>
                    
                    { temp && temp.map( (temp)=>{
                      
                      return <option name={temp.name} 
                      key={temp.id}
                      value={temp.id} 
                      label={temp.name}/>
                        
                    })}

            </select>
            <ContainerTemp> 
              {tempShow.temp?.map(e =>(
                <TempShow key ={e}>
                  <TempName >{e}</TempName>
                  <DeleteTemp 
                  onClick={deleteTemp}
                  value={e}>X</DeleteTemp>
                </TempShow>
              ))}
            </ContainerTemp>

            <CreateDog type='submit'>Create</CreateDog>
        </FormDoggies>
      }
      </Container>

  );
};

export default DogForm;