import React, {  Component } from "react";
import './Header.css'
import './Modal.css'
import Modal from './Modal'


// export default function Header() {


//     let [isModalVisible, setIsModalVisible] = useState([false]);
//     return (
        
//         <header className="header">
//             <button className="button" onClick={() => setIsModalVisible (isModalVisible = [true])}>Adicionar</button>
//             {console.log(useState())}
            
//             { isModalVisible == [true] ?  <Modal /> : null}
//         </header>    
        
//     )

// }

export default class Header extends Component {

    state = {
        isModalVisible: false //Aqui é setado o estado inicial do modal
    }

    setModal(){
        this.setState({isModalVisible: true})   //essa função seta o estado para true
    }
    
    render() {
        return (
            <header className="header">
                <button className="button" onClick={() => this.setModal()}>Adicionar</button> {/*botao que chama a função setando o estado para true*/}
                { this.state.isModalVisible === true ?  <Modal /> : null}   {/*aqui pergunta se o estado esta true, se sim, ele renderiza o elemento*/}
            </header>
        )
    }
}




