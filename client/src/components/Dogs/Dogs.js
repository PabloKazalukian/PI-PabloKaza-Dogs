import styled from 'styled-components';

export const Doggies= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #d8eefe;
    min-height: 605px ;
    gap: 10px;
    padding-bottom: 20px;
`;
export const OrderDog= styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center ;
    flex-wrap: wrap;
    background: #094067;
    height: 4rem;
    width: 100%;
    & p{
        color: #d8eefe;
    }
`;
export const PaginationDog= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 2rem;
    width: 100%;
`;
export const ButtonDog= styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 1.7rem;
    width: auto;
    background: #d8eefe;
`;