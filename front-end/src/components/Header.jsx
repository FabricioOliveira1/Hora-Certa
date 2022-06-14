import React, { useState } from "react";
import './Header.css'
import Modal from './Modal'


export default function Header(props) {


        return (
            <header className="header">
                <button className="button" onClick={() => props.setModal()}>Adicionar</button> {/*botao que chama a função setando o estado para true*/}
            </header>
        )
    
}




