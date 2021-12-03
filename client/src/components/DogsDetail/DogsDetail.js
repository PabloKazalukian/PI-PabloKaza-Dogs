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
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    `;
export const DogImg = styled.div`
    width: 60%;
    margin: 0px;
    padding:0px;
    position: relative;
    & h4{
        position: absolute;
        z-index: 1;
        top: 400px;
        left: 0;
        color: #d8eefe;
        font-size: 2rem;
        width: 100%;
        text-align: center;
        backdrop-filter: blur(5px);
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
    display: grid;
    background: red;
    width: 40%;
    grid-template-areas:"description description"
                        "height weight"
                        "temperament temperament"
                        "others others";
    text-align: center;
    padding: 20px;
    background: #094067;
    color: #fffffe;
`;
export const Desc  = styled.div`
    grid-area: description;
    border: 1px solid #90b4ce;
`;
export const Heigth  = styled.div`
    grid-area: height;
    border: 1px solid #90b4ce;
`;
export const Weigth = styled.div`
    border: 1px solid #90b4ce;
    grid-area: weight;
`;
export const Temperament = styled.div`
    border: 1px solid #90b4ce;
    grid-area: temperament;
`;
export const Others = styled.div`
    grid-area: others;
    border: 1px solid #90b4ce;
`;