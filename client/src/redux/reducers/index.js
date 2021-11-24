import {ADD_DOG,GET_DOGS,GET_DOG} from '../actions/index'
let initalState={
    dogs:[],
    dog:[]
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
            return{...state, dogs: action.payload}

        case ADD_DOG:
            return{...state, dogs: action.payload}

        default:
             return state;
    }
}