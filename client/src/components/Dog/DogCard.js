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
    /* box-shadow: 0px 0px 75px 2px rgba(144,180,206,1); */
    & p {
        text-align: center;
    }    
`;
export const DogDiv = styled.div`    
    
    width: 100%;
    position: relative;
    height: 250px;
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
    }
    & p{        
        background: #3331;
        width: 100%;
        margin: 0px;
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
    padding: 10px;
    text-decoration: none;
    color: #d8eefe;
    font-weight:700;
    border-radius: 5px;
    z-index: 20;
`;