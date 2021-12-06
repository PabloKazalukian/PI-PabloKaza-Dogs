import React, { useState } from "react";
import { Link } from "react-router-dom";


import{ContainerError,TitleError,BackToDoggi} from "./Error"

function Error404 (){


    return (
        <ContainerError>
            <TitleError>Error 404 - Page Not Found</TitleError>
            <BackToDoggi to={'/Api'}>Back to Home</BackToDoggi>
            <img src='https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?w=1080&ssl=1'/>

        </ContainerError>
    )

}



export default Error404