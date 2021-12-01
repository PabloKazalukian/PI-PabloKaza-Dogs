import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Doggi= styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 580px;
    position: relative;
    background: #90b4ce97;
    margin: 15px;
    border-radius: 5px;
    & p {
        text-align: center;
    }    
`;
export const DogDiv = styled.div`
    
    
    width: 100%;
    height: 290px;
    
    & h4{
        position: absolute;
        top: 270px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        z-index: 10;
    }
    & img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        z-index: 1;
        border-radius: 5px 5px 0px 0px ;
    }

`
export const DogInfo = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    height: 290px;
    padding:20px 10px 60px 10px;


`
export const LinkDog= styled(Link)`
    box-sizing: border-box;
    width: 120px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ef4565;
    padding: 10px;
    text-decoration: none;
    position: absolute;
    left: 110px;
    top:520px;
    z-index: 10;
    color: #d8eefe;
    font-weight:700;
    border-radius: 5px;
    &:link{text-decoration: none}
`;