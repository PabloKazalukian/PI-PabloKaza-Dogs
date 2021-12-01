import React from "react";
import dogi from './dogi.png'

import {ContainerButton,Button,Span,Dogi,Container,Text,Texto} from './LandingPage.js'


export default function LandingPage(){

    return(
        <Container>
            <Text>Weltome TO </Text>
            <Texto>DOGGI </Texto>

            <ContainerButton>
                
                <Button to={'/Api'} ><Span>Hola!</Span></Button>
                <Dogi src={dogi} />
            </ContainerButton>
            
        </Container>
    )

}
