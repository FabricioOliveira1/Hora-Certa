import React, { useState } from "react";
import Modal from 'react-modal'

import { Container } from './styles'

import { NewCardModal } from "../NewCardModal";
import { Header } from "../Header";
import { User } from "../User";
import { Main } from "../Main";
import { Footer } from "../Footer";

Modal.setAppElement('#root')


export function Box() {

    const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);


    function handleOpenNewCardModalOpen () {
        setIsNewCardModalOpen(true);
    }

    function handleCloseNewCardModalOpen () {
        setIsNewCardModalOpen(false);
    }    


    return (
        <Container>
            <Header 
                onOpenNewCardModal={handleOpenNewCardModalOpen}/>

            <NewCardModal 
                isOpen={isNewCardModalOpen} 
                onRequestClose={handleCloseNewCardModalOpen}/>

            <User />

            <Main />

            <Footer />
        </Container>
    )
}
