import styled from 'styled-components';

export const Doggies= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #d8eefe;
`;
export const OrderDog= styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center ;
    flex-wrap: wrap;
    background: #094067;
    height: 50px;
    width: 100%;
    & p{
        color: #d8eefe;
    }
`;