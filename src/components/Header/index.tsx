import React from "react";
import { Container, Button } from './style'
import remedio from '../../assets/Icons/remedio-32px.png'


interface HeaderProps {
    onOpenNewCardModal: () => void;
}

export function Header ({onOpenNewCardModal}:HeaderProps) {

        return (
            <Container className="header">
                <div>
                    <span><img src={remedio} alt="Logo" /></span>
                    <h1>Hora Certa</h1>
                </div>
                <Button  onClick={onOpenNewCardModal}>Adicionar</Button> {/*botao que chama a função setando o estado para true*/}               
            </Container>
        )
    
}




