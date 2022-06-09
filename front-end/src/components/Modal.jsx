import React, {  Component } from "react";
import './Modal.css'


export default class Modal extends Component {
    
    state = {
        isModalVisible: true //Aqui é setado o estado inicial do modal
    }

    closeModal(){
        this.setState({isModalVisible: false})
    }

    saveModal(){
        this.setState({isModalVisible: true})
    }

    render(){

        //{this.state.isModalVisible === true ?  <Modal /> : null}

        if(this.state.isModalVisible === true){

            return (
                <div className="cardBlur">
                    <div className="cardAdd">
                        <form action="" className="formCard">
                            <div>
                                <label htmlFor="medicamento">Medicamento:</label>
                                <input type="text" placeholder="Digite o medicamento" id="medicamento" />
                                <label htmlFor="qtdCartela">Cartela</label>
                                <input type="number" id="qtdCartela" />
                            </div>
                            <div className="posologia">
                                <label for="intervalo">Intervalo:</label>
                                <input type="number" id="intervalo" />
                            </div>
                            <div className="textareaDiv">
                                <label htmlFor="descricao">Descrição:</label>
                                <textarea type="text" id="descricao" rows={3} cols={65} />
                            </div>
                            <div className="buttons">
                                <button className="salvar" onClick={() => this.saveModal()}>Salvar</button>
                                <button className="cancelar" onClick={() => this.closeModal()}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>   
                
            ) 
        } else if(this.state.isModalVisible === false){
            return (null)
        } else {
            return (null)
        }
    }

}