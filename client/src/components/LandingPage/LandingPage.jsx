import React from "react";

import {ContainerButton,Button,Span} from './LandingPage.js'


export default function LandingPage(){

    return(
        <ContainerButton>
            <Button to={'/Api'} class="boton btn18"><Span>Hola!</Span></Button>
        </ContainerButton>
    )

}
