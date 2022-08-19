import React, { useState, useContext } from "react"

import { Footer } from "../Footer"
import { CardContext } from "../../CardContext"

import remedio from '../../assets/Icons/remedio-64px.png'
import forbidden from '../../assets/Icons/forbidden-16px.png'

import { Container } from "./style"



export function Login () {
    const { handleLogin } = useContext(CardContext)


    const [userName, setUserName ] = useState('')
    const [isInuputLoginOpen, setIsInuputLoginOpen] = useState(false);

    function handleisInuputLoginOpen () {
        
        setIsInuputLoginOpen(!isInuputLoginOpen)
    }

    function handleOpenApp () {
        handleLogin(userName)
    }

    return (
        <Container>
            <div>
                <div>
                    <img src={remedio} alt="Logo" />
                    <h1>Hora Certa</h1>
                </div>
                <div className="container-button" >
                    {isInuputLoginOpen ? 
                    <div className="container-input">
                        <input onChange={event => setUserName(event.target.value)} type="text" placeholder="Digite seu Nome" />
                        <button className="close-button" onClick={handleOpenApp}><img src={forbidden} alt="Fechar" /></button>
                    </div> :                 
                     <button onClick={handleisInuputLoginOpen} >Entrar</button> }
                    
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </Container>
    )
}