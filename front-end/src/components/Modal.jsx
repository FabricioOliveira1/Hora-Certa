import React, { useEffect, useState } from "react";
import './Modal.css'


export default function Modal (props) {  

    const [medicine, setMedicine] = useState('');
    const [amount, setAmount] = useState('');
    const [interval, setInterval] = useState('');
    const [description, setDescription] = useState('');

    function getCardInfoAndSave() {

        let cardInfo = {
            medicine,
            amount,
            interval,
            description,
        }      

        props.modalMethods.saveModal(cardInfo)
    }

    return (
        <div className="cardBlur">
            <div className="cardAdd">
                <form action="" className="formCard">
                    <div>
                        <label htmlFor="medicamento">Medicamento:</label>
                        <input type="text" onChange={(e) => setMedicine(e.target.value)} placeholder="Digite o medicamento" id="medicamento" />
                        <label htmlFor="qtdCartela">Cartela</label>
                        <input type="number" onChange={(e) => setAmount(e.target.value)} id="qtdCartela" />
                    </div>
                    <div className="posologia">
                        <label htmlFor="intervalo">Intervalo:</label>
                        <input type="number" onChange={(e) => setInterval(e.target.value)} id="intervalo" />
                    </div>
                    <div className="textareaDiv">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea type="text" onChange={(e) => setDescription(e.target.value)} id="descricao" rows={3} cols={65} />
                    </div>
                    <div className="buttons">
                        <button className="salvar" onClick={() => getCardInfoAndSave()}>Salvar</button>
                        <button className="cancelar" onClick={() => props.modalMethods.closeModal()}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>   
        
    ) 
        
    

}