import {GET_DOGS,GET_DOG,SORT,GET_TEMP,FILTER_TEMP,SORT_WEIGHT,SORT_HEIGHT} from '../actions/index';

let initalState={
    dogs:[],
    dog:[],
    temp:[],
    error:false

}

export default function rootReducer(state=initalState,action){
    switch(action.type){
        case GET_DOGS:            
            return{...state,
                dogs: action.payload,
                dog: action.payload,
                error:false }
            
        case GET_DOG:
            if(action.payload.length===0){
                return{...state,
                    error: true ,
                    dog: action.payload}
            }else{
                return{...state, 
                    error:false
                    ,dog: action.payload}           
            }        
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
            let positionA,positionB;
            orderDog = orderDog.sort((a,b)=>{
                a =a.weight?.split(' - ');
                b = b.weight?.split(' - ');
                // usa el ultimo elemento si es mayor
                if(action.payload === 'mayor'){ 
                    positionA= a.length-1;
                    positionB= b.length-1;
                } else { // usa el primer elemento si es menor
                    positionA= 0;
                    positionB= 0;
                }
                if (parseInt(a[positionA],10) < parseInt(b[positionB],10) ) {
                    return action.payload === 'mayor'? 1 : -1;
                }
                if (parseInt(a[positionA],10) > parseInt(b[positionB],10) ) {
                    return action.payload === 'mayor'? -1 : 1;
                }
                return a[1]?b[1]?  (a[1]<b[1])?-1:1 :1 :-1;
                //pregunta si existe uno u otro, luego compara segunda posicion si existen.
            })

            return {...state, dog: orderDog }
        case SORT_HEIGHT:
            //(o)n^2
            let ordeDog = [...state.dog];
            let position1,position2;
            ordeDog = ordeDog.sort((a,b)=>{
                a =a.height?.split(' - ');
                b = b.height?.split(' - ');
                // usa el ultimo elemento si es mayor
                if(action.payload === 'mayor'){ 
                    position1= a.length-1;
                    position2= b.length-1;
                } else { // usa el primer elemento si es menor
                    position1= 0;
                    position2= 0;
                }
                if (parseInt(a[positionA],10) < parseInt(b[positionB],10) ) {
                    return action.payload === 'mayor'? 1 : -1;
                }
                if (parseInt(a[positionA],10) > parseInt(b[positionB],10) ) {
                    return action.payload === 'mayor'? -1 : 1;
                }
                return a[1]?b[1]?  (a[1]<b[1])?-1:1 :1 :-1;
                //pregunta si existe uno u otro, luego compara segunda posicion si existen.
            })

            return {...state, dog: ordeDog }
        default:
             return state;
    }
}