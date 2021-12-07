import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ContainerError = styled.div`
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    display: flex;
    padding-top: 20px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-height: 92vh;
    background: #90b4ce25;

    & img {
        width: 750px;
        border-radius: 15px;
    }
`;

export const TitleError = styled.h2`
    --border-width: 3px;
    font-size: 1.9rem;
    border: 2px solid #333;
    padding: 15px;
    border-radius: 15px;
    position: relative;
    
    &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
    border-radius: 18px;
  }



`;



export const BackToDoggi = styled(Link)`
    width: 150px;
    height: 50px;
    display: flex;
    position: absolute;
    top:82%;
    left: 45%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ef4565;
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
`