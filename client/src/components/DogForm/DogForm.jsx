import React from 'react';
import {useEffect, useState} from 'react'
import { getTemperament} from '../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';

import {FormDoggies,Container,ContainerTemp,CreateDog,CompleteDog,Agregado,
  InputNum,Title,ContainInput,TempShow,DeleteTemp,TempName,Error} from './DogForm';

import {Lin} from '../NavBar/NavegationBar'

const DogForm = () => {
  const dispatch = useDispatch();
  const temp = useSelector(state => state.temp);

  const initialTemp={
    temp: []
  }
  const initialState ={
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax:"",
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
  const [error, setError] = useState({
    name:'',
    temperament:'',
    life_span:'',
    height:'',
    weigth:'',
  });
  
  const validation = ()=>{
    let boolean= true;
    if(state.name.length > 40 || state.name.length === 0 || state.name.length<5){
      error.name='the name is invalid';
      console.log(error);
      boolean= false;
    } else{
      error.name='';
    }
    if(state.temperament.length < 1){
      setError({
        ...error,
        temperament:'temperaments are empty'
      })
      boolean= false;
    }else {
      if(state.temperament.length> 10){
        setError({
          ...error,
          temperament:'temperaments are excesive'
        })
        boolean= false;
      }else{
        setError({
          ...error,
          temperament:''
        })
      }
      if(state.heightMin <=0 || state.heightMax >100){
        setError({
          ...error,
          height:'heigh no correct'
        })
      }
      if(state.weightMin <=0 || state.weightMax >100){
        setError({
          ...error,
          weight:'weight no correct'
        })
      }
      if(state.life_span <=0 || state.life_span >50){
        setError({
          ...error,
          life_span:'life span no correct'
        })
      }


    }
    return boolean;
  }

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
    .catch(err=>{
      setSumbit(false);
      alert(err);
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validation()){
      addDogs(state);
      setSumbit(true);
    }
  }

  //debo mostrar el name, pero solo llevar al back el id de los temperament
  const selectTemp = (e)=>{
    if('Selecciona una opción'!==e.target.value){
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
        <Title>Created a Doggi</Title>
          <ContainInput>
            <label>Name </label>
            <input required placeholder='5-40 characters' name='name' onChange={handleState} value={state.name}/>
            <Error>{error.name}</Error>
            
          </ContainInput>
          <ContainInput>
            <label>Height <Agregado>(No matter the order)</Agregado> </label>
            <InputNum required  name='heightMin' onChange={handleState} value={state.heightMin}/>
            <InputNum required  name='heightMax' onChange={handleState} value={state.heightMax}/>              
            <Error>{error.height}</Error>
            
          </ContainInput>
          <ContainInput>
            <label>Weight <Agregado>(No matter the order)</Agregado> </label>
            <InputNum required  type="number" name='weightMin' onChange={handleState} value={state.weightMin}/>
            <InputNum required  type="number" name='weightMax' onChange={handleState} value={state.weightMax}/>
            <Error>{error.weigth}</Error>

          </ContainInput>
          <ContainInput>
            <label>Life expectancy <Agregado>Max 50</Agregado> </label>
            <InputNum   type="number" name="life_span" onChange={handleState} value={state.life_span} />
            <Error>{error.life_span}</Error>

          </ContainInput>
          <ContainInput>
            <label>Images  </label>            
            <input name="images" onChange={handleState} value={state.images} />
          </ContainInput>
          <ContainInput>
            <label>Temperament/s <Agregado>Max 10</Agregado> </label>
            <select name='selectTemp' onClick={selectTemp}>
              <option value='Selecciona una opción'
                label={'select'}/>
                  
                  { temp && temp.map( (temp)=>{
                    
                    return <option name={temp.name} 
                    key={temp.id}
                    value={temp.id} 
                    label={temp.name}/>
                      
                  })}
            </select>            
            <Error>{error.temperament}</Error>
          </ContainInput>
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