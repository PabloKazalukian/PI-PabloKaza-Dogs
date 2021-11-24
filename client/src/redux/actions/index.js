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
        .catch(err=>{
            console.log(err);
        })
    }    
}

//obtiene un perro por query pero manda a dogs
export const getDog = (search) =>{
    
    return function(dispatch){
        return fetch(`http://localhost:3001/api/dogs?name=${search.dogSearch}`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_DOG, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
}


export const getDogById = (id) =>{
    
    return function(dispatch){
        return fetch(`http://localhost:3001/api/dogs/${id.dogSearch}`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_DOG, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
}
