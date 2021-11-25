import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Doggi= styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #90b4ce97;
    margin: 15px;
    padding: 10px;
`;
export const LinkDog= styled(Link)`
    box-sizing: border-box;
    width: 120px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #90b4ce97;
    margin: 15px;
    padding: 10px;
    text-decoration: none;
`;