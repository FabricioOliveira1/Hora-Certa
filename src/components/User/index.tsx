import React from "react";
import { Container } from './style'
import remedio from '../../assets/Icons/remedio-64px.png'


export function User() { 
    return(   
            <Container>
                <div className="title">
                    <span><img src={remedio} alt="Logo" /></span>
                    <h1>Hora Certa</h1>
                </div>
                <div className="info">
                    <span className="img_container"><img alt=""/></span>
                    <h2>Fabricio Oliveira</h2>
                    <p>27 Anos</p>
                    <p>Masculino</p>
                </div>
            </Container> 
    )
}