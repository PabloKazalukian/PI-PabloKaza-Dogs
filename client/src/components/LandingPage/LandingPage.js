import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';


const Animation = keyframes`
    0%{ 
        transform: scale(100%);
    }
    50%{
        transform: scale(110%);
    }
    100%{
        transform: scale(100%);
    }
`;
export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url('https://comoeducarauncachorro.com/blog/wp-content/uploads/2013/06/cac1.jpg');
    /* background-image: url('https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/purina-por-que-mi-perro-no-quiere-comer.jpg'); */
    background-repeat: no-repeat; 
    background-size: cover;

`;
export const Texto = styled.h1`
    position: absolute;
    top: 250px;
    left: 0px;
    z-index: 5;
    width: 100%;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    font-size: 150px;
    padding: 0px;
`;
export const Text = styled.h1`
    position: absolute;
    top: -100px;
    left: 0;
    z-index: 5;
    width: 100%;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    font-size: 130px;
    padding: 0px;
`;
export const Dogi = styled.img`
    width: 450px;
    height: 550px;
    border-radius: 15px;
    transform: scaleX();
    animation-name: ${Animation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
`;

export const ContainerButton = styled.div`
    position: absolute;
    top: 75%;
    left: 15%;
    background-repeat: no-repeat; 
    background-size: cover;
    transform: rotateX(0);
`;
export const Button = styled(Link)`
    display: inline-flex;
    width: 100px;
    min-width: 290px;
    height: 80px;
    background: #141414;
    justify-content: center;
    align-items: center;
    transition: .3s ease all;	
    position: relative;
    overflow: hidden;
    text-decoration: none;
    
    &:after {        
        content: 'Welcome!';
        font-size: 50px;
        color: #fff;
        font-family: 'Ubuntu', sans-serif;
        position: absolute;
        top: -90px;
        left: 12%;
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