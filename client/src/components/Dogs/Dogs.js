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
        width: 155px;
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

export const ContainError = styled.div`
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
    min-height: 84vh;
    background: #d8eefe;    

    & img {
        width: 450px;
        border-radius: 15px;
    }

`;
export const Error = styled.button`
    box-sizing: border-box;
    background-color: #ef4565;
    margin: 0px;
    text-decoration: none;
    width: 10%;
    height: 50px;
    color: #fffffe;
    padding: 14px 0px;
    text-align: center;
    font-weight:700;
    border:1px solid #333;
    cursor: pointer;
    margin-top: 25px;
    border-radius:15px;
    letter-spacing: 1px;
    box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
    &:hover{
        color: #333;
    }
`;

