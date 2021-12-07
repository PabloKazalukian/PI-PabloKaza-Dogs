// export const ADD_DOG = 'ADD_DOG';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOG = 'GET_DOG';
export const SORT = 'SORT';
export const GET_TEMP = 'GET_TEMP';
export const FILTER_TEMP = 'FILTER_TEMP';
export const SORT_WEIGHT = 'SORT_WEIGHT';
export const SORT_HEIGHT = 'SORT_HEIGHT';






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

export const sort = (order) => {
    //alphabetical
    return {
        type: SORT,
        payload: order,
    }

}

export const sortWeigth  = (order) => {
    
    return {
        type: SORT_WEIGHT,
        payload: order,
    }

}
export const sortHeigth  = (order) => {
    
    return {
        type: SORT_HEIGHT,
        payload: order,
    }

}


export const getTemperament = () => {
    getDogs()
    return function(dispatch){
        return fetch(`http://localhost:3001/api/temperament`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_TEMP, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const filterTemp = (temp) => {
    
    return {
        type: FILTER_TEMP,
        payload: temp,
    }

}