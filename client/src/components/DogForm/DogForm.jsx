import React from 'react';
import {useEffect} from 'react'
import { } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const CreateHouse = () => {
    const dispatch = useDispatch()
    const initialState ={
        name: "",
        height: "",
        weight: "",
        life_span:"",
        images:"",
    }
  const [state, setstate] = React.useState(initialState);

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
    addDogs(state)
  }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input name='name' onChange={handleState} value={state.name}/>
            <label>Height: </label>
            <input name='height' onChange={handleState} value={state.height}/>
            <label>Weight: </label>
            <input name='weight' onChange={handleState} value={state.weight}/>
            <label>Life span: </label>
            <input name="life_span" onChange={handleState} value={state.life_span} />
            <label>Images: </label>            
            <input name="images" onChange={handleState} value={state.images} />
            <button type='submit'>Create</button>
        </form>
    );
};

export default CreateHouse;