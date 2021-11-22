import {ADD_DOG,GET_DOGS,GET_DOG} from '../actions/index'
let initalState={
    dogs:[],
    dog:[]
}

export default function rootReducer(state=initalState,action){
    switch(action.type){
        case GET_DOGS:
            return{...state, dogs: state.dogs.concat(action.payload)}
        case GET_DOG:
            return{...state, dogs: state.dog.concat(action.payload)}
        default:
             return state;
    }
}