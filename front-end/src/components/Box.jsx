
import React, { useState } from "react";
import './Box.css'

import Header from './Header'
import Modal from "./Modal";
import User from './User'
import Main from './Main'
import Footer from './Footer'


export default function Box() {

    const [cardList, setCardList] = useState([])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const modalMethods = {
        closeModal() {
            setIsModalVisible(false)
            console.log('fechou')
        },
        saveModal(recievedInfo) {

            const list = [...cardList, recievedInfo]
            
            setCardList(list)

            setIsModalVisible(false)
        }
    }

    function setModal(){
        setIsModalVisible(true)
    }

    return (
        <div className="main-box">
            <Header setModal={setModal}/>
            { isModalVisible === true ?  <Modal modalMethods={modalMethods} /> : false}  
            <User />
            {<Main cardList={cardList} />}
            <Footer />
        </div>
    )
}
