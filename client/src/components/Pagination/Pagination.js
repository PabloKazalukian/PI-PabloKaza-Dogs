import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 100%;
    background: #d8eefe;
`
export const ContainerUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
    background: #d8eefe;
    list-style:none;
    gap: 1rem;

`;
export const ContainerLi = styled.li`
    margin: 0px 5px;

`;
export const ButtonPage = styled.button`
    height: 1.5rem;
    width: 2rem;
    background: #d8eefe;
    border: 1px solid #333;
    cursor: pointer;

    &:focus{
        background: red;
        color: #fff;
    }
`;


