import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 724px;
    background: #d8eefe;
    box-shadow: inset 10px 33px 80px -4px rgba(0,0,0,0.28);
`;

export const DogDetail= styled.div`
    box-sizing: border-box;
    width: 90%;
    min-height: 500px;
    display: flex;
    background: #90b4ce97;
    position: relative;
    margin: 0;
    overflow: hidden;
    padding: 0;
    border-radius: 15px;
    transition: 1s all;
    box-shadow: 10px 33px 80px -4px rgba(0,0,0,0.28);

    `;
export const DogImg = styled.div`
    width: 60%;
    margin: 0px;
    padding:0px;
    position: relative;
    & h4{
        position: absolute;
        z-index: 1;
        top: 450px;
        left: 0;
        color: #d8eefe;
        font-size: 1.7rem;
        width: 100%;
        text-align: center;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0, 0.4);
    }
    & img{
        position: absolute;
        top: 0;
        left: 0;        
        width: 100%;
        height: 100%;
        z-index: 1;
        /* object-fit: cover; */
    }
`;
export const DogDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    flex-direction: column;

`;