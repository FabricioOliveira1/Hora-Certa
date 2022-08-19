import Modal from 'react-modal'
import React, { FormEvent, useContext, useState } from "react";
import { Container } from './style'
import { CardContext } from '../../CardContext';

 interface NewCardModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
 }

 export function NewCardModal ({ isOpen, onRequestClose }: NewCardModalProps) {

    const { createCard } = useContext(CardContext)

    const [medicamento, setMedicamento] = useState('')
    const [intervalo, setIntervalo] = useState(0)
    const [qtdCartela, setQtdCartela] = useState(0)
    const [descricao, setDescricao] = useState('')
    
      
    async function handleCreateNewCard (event: FormEvent) {
        event.preventDefault();

        await createCard({
            
            medicamento,
            intervalo,
            qtdCartela,
            descricao,   
        })

        setMedicamento('')
        setIntervalo(0)
        setQtdCartela(0)
        setDescricao('')

        onRequestClose()
    }
    return (
        <Modal
            isOpen={isOpen} //Propriedade obrigatória da lib
            onRequestClose={onRequestClose} //Propriedade obrigatória da lib
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <Container onSubmit={handleCreateNewCard}>
                
                    <h2>Adicionar Medicamento</h2>

                    <label htmlFor="medicamento">Medicamento:</label>
                    <input type="text" 
                    value={medicamento}
                    onChange={event => setMedicamento(event.target.value)}
                     placeholder="Digite o medicamento" 
                     id="medicamento" />

                    <div className='container-input'>
                        <div>
                            <label htmlFor="qtdCartela">Cartela:</label>
                            <input 
                            type="number" 
                            placeholder='20'  
                            id="qtdCartela" 
                            value={qtdCartela}
                            onChange={event => setQtdCartela(Number(event.target.value))}/>
                        </div>

                        <div>
                            <label htmlFor="intervalo">Intervalo (De quantas em quantas horas):</label>
                            <input type="number" 
                            placeholder='8' 
                            id="intervalo" 
                            value={intervalo}
                            onChange={event => setIntervalo(Number(event.target.value))}/>
                        </div>
                    </div>

                    <label htmlFor="descricao">Descrição:</label>
                    <textarea id="descricao" 
                    rows={3} 
                    cols={65} 
                    value={descricao}
                    onChange={event => setDescricao(event.target.value)}/>
                
                <div className='container-button'>
                    <button className='button-close' onClick={onRequestClose}>Cancelar</button>
                    <button type='submit'>Salvar</button>
                </div>
            
            </Container>
            
        </Modal>
    )
 }


