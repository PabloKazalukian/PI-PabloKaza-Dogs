import React from 'react';
import {useEffect, useState} from 'react'
import { getTemperament} from '../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';
import {FormDoggies,Container} from './DogForm';


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
        console.log(err);
      })          
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(state);
    addDogs(state)
  }

  //debo mostrar el name pero llevar al back el id de los temperament
  const selectTemp = (e)=>{
    console.log(typeof e.target.value)
    if(!state.temperament.includes(e.target.value)){

      setstate({
        ...state,
        temperament: [...state.temperament,
           parseInt(e.target.value,10)]
      });

      let [item] = temp.filter(elem =>{if (elem.id == (e.target.value)){
        return elem.name;
      }});
      setTempShow({
        ...state,
        temp: [...tempShow.temp, item.name]
      })
    }else{
      alert('No vale repetir');
    }
  }

  return (
      <Container>
        <FormDoggies onSubmit={handleSubmit}>
            <label>Name: </label>
            <input name='name' onChange={handleState} value={state.name}/>
            <label>Height: </label>
            <input type="number" name='height' onChange={handleState} value={state.height}/>
            <label>Weight: </label>
            <input type="number" name='weight' onChange={handleState} value={state.weight}/>
            <label>Life span: </label>
            <input type="number" name="life_span" onChange={handleState} value={state.life_span} />
            <label>Images: </label>            
            <input name="images" onChange={handleState} value={state.images} />
            <label>temperament: </label>
            <select name='selectTemp' onChange={selectTemp}>
              <option value='Selecciona una opción'
                  label={'Selecciona una opción'}/>
                    
                    { temp && temp.map( (temp)=>{
                      
                      return <option name={temp.name} 
                      key={temp.id}
                      value={temp.id} 
                      label={temp.name}/>
                        
                    })}

              </select>
              <div> 
                {tempShow.temp?.map(e =><p key ={e}>{e}</p>)}
              </div>

              <button type='submit'>Create</button>
        </FormDoggies>
      </Container>
  );
};

export default DogForm;