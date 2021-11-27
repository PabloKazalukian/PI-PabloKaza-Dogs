import {ADD_DOG,GET_DOGS,GET_DOG,SORT,GET_TEMP,FILTER_TEMP,SORT_WEIGHT} from '../actions/index'
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
                        find(elem => elem.toLowerCase() === action.payload)})
                    }

        case SORT_WEIGHT:
            //(o)n^2
            let orderDog = [...state.dog];
            // orderDog = orderDog.forEach((dog)=>{
            //     dog.weight = dog.weight?.split(' - ');
            // })
            let positionA,positionB;
            orderDog = orderDog.sort((a,b)=>{
                a =a.weight?.split(' - ');
                b = b.weight?.split(' - ');
                if(action.payload === 'mayor'){
                    positionA= a.length-1;
                    positionB= b.length-1;
                } else {
                    positionA= 0;
                    positionB= 0;
                }
                console.log(parseInt(a[positionA],10) , parseInt(b[positionB],10) );
                if (parseInt(a[positionA],10) < parseInt(b[positionB],10) ) {
                    return action.payload === 'mayor'? 1 : -1;
                }
                if (parseInt(a[positionA],10) > parseInt(b[positionB],10) ) {
                    return action.payload === 'mayor'? -1 : 1;
                }
                return 0;
            })

            return {...state, dog: orderDog }
        default:
             return state;
    }
}