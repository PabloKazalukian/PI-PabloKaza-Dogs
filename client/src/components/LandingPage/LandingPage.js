import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 98vh;
    width: 100%;
    background: #d8eefe;
`
export const Button = styled(Link)`
    display: inline-flex;
    width: 100px;
    min-width: 270px;
    height: 80px;
    background: #141414;
    justify-content: center;
    align-items: center;
    transition: .3s ease all;	
    border: 1px solid #ccc;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    
    &:after {        
        content: 'Wachin';
        font-size: 50px;
        color: #fff;
        font-family: 'Ubuntu', sans-serif;
        position: absolute;
        top: -50px;
        left: 22%;
        transition: .3s;
    }
    &:hover::after{
	    top: 10px;
    }
    `;


export const Span = styled.span`
    position: relative;
	z-index: 2;
	font-size: 50px;
	color: #fff;
	font-family: 'Ubuntu', sans-serif;
	transition: .3s ease-in-out all;

    ${Button}:hover &{
	    transform: translateY(70px);
    }
    `;