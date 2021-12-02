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
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
`;
export const OrderDog= styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    align-items: center ;
    flex-wrap: wrap;
    background: #094067;
    height: 4rem;
    width: 100%;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    & p{
        color: #d8eefe;
    }
    & select {
        background:#d8eefe;
        color: #dd4565;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 12px;
        border:1px transparent;
        font-family: 'Outfit', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: .9rem;
        transition: all 0.25s ease;
    }
    & select:hover {
        cursor: pointer;
    }
    & select::selection option{
        font-weight: 500;
        cursor: pointer;
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