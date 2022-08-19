import React, { useContext } from "react";
import { Container } from './style'
import remedio from '../../assets/Icons/remedio-64px.png'
import { CardContext } from "../../CardContext";


export function User() { 

const { passedUserName } = useContext(CardContext)

    return(   
            <Container>
                <div className="title">
                    <span><img src={remedio} alt="Logo" /></span>
                    <h1>Hora Certa</h1>
                </div>
                <div className="info">
                    <span className="img_container"><img alt=""/></span>
                    <h2>{passedUserName}</h2>
                    {/* <p>28 Anos</p>                    */}
                </div>
            </Container> 
    )
}