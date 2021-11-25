import {ADD_DOG,GET_DOGS,GET_DOG,SORT,GET_TEMP,FILTER_TEMP} from '../actions/index'
let initalState={
    dogs:[],
    dog:[],
    temp:[],
}

export default function rootReducer(state=initalState,action){
    switch(action.type){
        case GET_DOGS:
            // if(state.dogs.length<1){//guarda los datos una vez seguridad x ahora.
                return{...state,
                        dogs: action.payload,
                        dog: action.payload }
            // }
        case GET_DOG:
            return{...state, dog: action.payload}

        case ADD_DOG:
            return{...state, dog:  action.payload}
        case GET_TEMP:
            return {...state, temp: action.payload}
        case SORT: 
        //Siempre pregunta si es ascendente
        //Si lo es lo ordena de una forma, o la otra
                let ordernamientoDog = [...state.dog];
                ordernamientoDog = ordernamientoDog.sort((a, b)=> {
                    if (a.name < b.name) {
                        return action.payload === 'ascendente'? -1 : 1;
                    }
                    if (a.name > b.name) {
                        return action.payload === 'ascendente'? 1 : -1;
                    }
                    return 0;
                })
            return{...state,
                 dog: ordernamientoDog}
        case FILTER_TEMP:

            return {...state, 
                    dog: state.dogs.filter( e =>{
                        return e.temperament?.
                        split(', ').
                        find(elem => elem.toLowerCase() === action.payload)})}

        default:
             return state;
    }
}