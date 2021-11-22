export const ADD_DOG = 'ADD_DOG';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOG = 'GET_DOG';


export const getDogs = () =>{
    return function(dispatch){
        return fetch(`http://localhost:3001/api/dogs`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_DOGS, payload: json});
        })
    }    
}
export const getDog = () =>{
    return function(dispatch){
        return fetch(`http://localhost:3001/api/dog`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_DOG, payload: json});
        })
    }
    
}
