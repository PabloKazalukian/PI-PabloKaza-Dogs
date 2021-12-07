import React from "react";

import {ContainerButton,Button,Span,Container,Text} from './LandingPage.js'


export default function LandingPage(){

    return(
        <Container>
            <Text>Weltome TO DOGGI </Text>

            <ContainerButton>
                
                <Button to={'/Api'} ><Span>Welcome!</Span></Button>
                {/* <Dogi src={dogi} /> */}
            </ContainerButton>
            
        </Container>
    )

}
