import styled from 'styled-components';

export const Container  = styled.div`
    width: 100%;
    min-height: 98vh;
    background: #90b4ce;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
`;


export const CompleteDog = styled.div`
    display: flex;
    width: 600px;
    min-height: 600px;  
    background: #d8eefe;
    flex-direction: column;
    justify-content: center;
    align-items:center;    

`

export const FormDoggies= styled.form`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 600px;
    min-height: 600px;
    padding: 50px;
    background: #d8eefe;
`;
export const Title= styled.h1`
    position: absolute;
    top:15%;
    left: 41%;
`;
export const CreateDog = styled.button`
    border: 0px;
    display: block;
    width: 21%;
    box-sizing: border-box;
    padding:5px 25px;
    background:#ef4565;
    text-decoration: none;
    color: #d8eefe;
    font-weight:700;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        color: #333;
    }
`;

export const ContainerTemp = styled.form`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    background: #3331;//3331
    min-height: 80px ;
    overflow: hidden;
    
`;

export const TempShow = styled.div`    
    color: #fffffe;
    display: flex;
    height:23px;
    min-width: 5px;
    flex-direction: row;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid #ef4565;
    margin: 4px;
    background: #90b4ce97;

`;

export const  Error = styled.label`
    color: #ef4565;
`;

export const Agregado = styled.p`
    color:#ccc;
    display: inline;
`

export const ContainInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    width: 60%;
    min-height: 65px;
`;

export const TempName = styled.p`
    box-sizing: border-box;
    display: inline-flex;
    height: 23px;
    text-align: center;
    color: #111;
    font-weight: 500;
    text-align: center;
    padding: 0px 4px;
    margin: 0px 2px;
    cursor: default;
`;

export const DeleteTemp = styled.button`
    background: #ef4565;
    padding: 3px;
    color: #d8eefe;
    border: none;
    cursor: pointer;
    font-weight: 700;

`;
