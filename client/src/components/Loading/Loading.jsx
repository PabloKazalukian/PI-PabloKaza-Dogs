import React from "react";
import styled from 'styled-components';


function Loading (){

    const Load = styled.div`
        width:100% ;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
    `;

    return (
        <Load>
            <h2>Loading</h2>
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif'
            alt='loading'/>
        </Load>
    )

}



export default Loading