import React, { Component } from "react";
import './Card.css'
// import { Component } from "react";

export default props => 
    <React.Fragment>
        <div className="card">
            <h2>Remedio Nome</h2>
            <p>Descriçao do remedio que ser criado aqui nesse box.</p>
            <p>intervalo</p>
            <p>quantidade</p>
            <p>proxima aplicação</p>
        </div>
    </React.Fragment>

    // class Card extends Component{



    //     render(){
    //         <div className="card">
    // //         <h2>Remedio Nome</h2>
    // //         <p>Descriçao do remedio que ser criado aqui nesse box.</p>
    // //         <p>intervalo</p>
    // //         <p>quantidade</p>
    // //         <p>proxima aplicação</p>
    // //     </div>
    //     }
    // }