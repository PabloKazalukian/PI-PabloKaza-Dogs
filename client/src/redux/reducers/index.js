import {ADD_DOG,GET_DOGS,GET_DOG,SORT} from '../actions/index'
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
        case SORT: 
        //Siempre pregunta si es ascendente
        //Si lo es lo ordena de una forma, o la otra
                let ordernamientoDog = [...state.dogs];
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
                 dogs: ordernamientoDog}
        default:
             return state;
    }
}