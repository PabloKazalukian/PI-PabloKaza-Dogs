import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Doggi= styled.div`
    box-sizing: border-box;
    width: 500px;
    min-height: 360px;
    background: #90b4ce97;
    margin: 15px;
    position: relative;
    border-radius: 5px;
    transform: translateY(0px);
    transition: all .2s;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    /* font-family: 'Roboto', sans-serif; */
    /* box-shadow: 0px 0px 75px 2px rgba(144,180,206,1); */
    & p {
        text-align: center;
    }    
    &:hover{
        box-shadow: 0 5px 25px -10px #000;
        transform: translateY(-5px);
    }
`;
export const DogDiv = styled.div`    
    
    width: 100%;
    position: relative;
    height: 250px;
    box-shadow: none;
    transform: translateY(0px);
    & img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 5px 5px 0px 0px ;
        object-fit: cover;
        object-position: top;
    }

`
export const DogInfo = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 180px;
    background:#C4E3F0;
    position: relative;
    z-index: 10;
    box-shadow: -4px 27px 37px -2px rgba(20,20,2,0.42);
    & h4{        
        text-align: center;
        font-size: 30px;
        margin: 2px 0px;      
        color: #222 ;
    }
    & p{        
        background: #3331;//3331ground: 
        width: 100%;
        margin: 0px;
        color: #000 ;
    }
    

`
export const LinkDog= styled(Link)`
    box-sizing: border-box;
    width: 120px;
    height: 50px;
    display: flex;
    position: absolute;
    top: 85%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ef4565;
    padding: 15px;
    text-decoration: none;
    color: #d8eefe;
    font-weight:700;
    border-radius: 5px;
    z-index: 20;
    transition: top .3s;
    transition-delay: .6s;
    &:hover{
        color: #333;
    }
    ${Doggi}:hover &{
        top:72%;
    }
`;