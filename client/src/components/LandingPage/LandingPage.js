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
    border: 50px solid #77777777;
    position: relative;
    background-image: url('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg');
    background-repeat: no-repeat; 
    background-size: cover;

`;
export const Texto = styled.h1`
    position: absolute;
    top: 250px;
    left: 0;
    z-index: 5;
    width: 100%;
    color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 150px;
    padding: 0px;
    background-image: url('https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/purina-por-que-mi-perro-no-quiere-comer.jpg');
    background-repeat: no-repeat; 
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
`;
export const Text = styled.h1`
    position: absolute;
    top: -100px;
    left: 0;
    z-index: 5;
    width: 100%;
    color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 150px;
    padding: 0px;
    background-image: url('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg');
    background-repeat: no-repeat; 
    background-position-y:  center;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 689px;
    width: 100%;
    background-repeat: no-repeat; 
    background-size: cover;
    transform: rotateX(0);
`;
export const Button = styled(Link)`
    display: inline-flex;
    width: 100px;
    min-width: 270px;
    height: 80px;
    background: #141414;
    justify-content: center;
    align-items: center;
    transition: .3s ease all;	
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    
    &:after {        
        content: 'Welcome!';
        font-size: 50px;
        color: #fff;
        font-family: 'Ubuntu', sans-serif;
        position: absolute;
        top: -50px;
        left: 10%;
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