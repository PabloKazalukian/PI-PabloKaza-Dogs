import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NaviBar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    position:relative;
    min-height: 65px;
    background: #3da9fc;

    `
export const NavUl = styled.ul`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 65px;    
    margin: 0px;
    position:fixed;
    background: #094067;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    list-style:none;
    padding: 0px 20px;
`
export const SearchBar = styled.form`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: auto;
`
export const InputBar = styled.input`
    display: flex;
    flex-direction: row;
    width: 60%;
    outline: none;
`
export const ButtonBar = styled.input`
    width: 20%;
    box-sizing: border-box;
    padding:0px 15px;
`
export const Lin = styled(Link)`
    box-sizing: border-box;
    background-color: #ef4565;
    margin: 0px;
    text-decoration: none;
    width: 10%;
    height: 50px;
    color: #fffffe;
    padding: 12px 0px;
    text-align: center;
    font-weight:700;
    border-radius:3px;
`