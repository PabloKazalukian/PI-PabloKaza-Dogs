import React from "react";
import dogi from './dogi.png'

import {ContainerButton,Button,Span,Dogi,Container,Text,Texto} from './LandingPage.js'


export default function LandingPage(){

    return(
        <Container>
            <Text>Weltome TO DOGGI </Text>

            <ContainerButton>
                
                <Button to={'/Api'} ><Span>Bienvenido!</Span></Button>
                {/* <Dogi src={dogi} /> */}
            </ContainerButton>
            
        </Container>
    )

}
