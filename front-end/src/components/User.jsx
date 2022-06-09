import React from "react";
import './User.css'
import remedio from '../assets/Icons/remedio-64px.png'

export default props => 
    <React.Fragment >
            <aside className="user">
                <div className="title">
                    <span><img src={remedio} alt="Logo" /></span>
                    <h1>Hora Certa</h1>
                </div>
                <div className="info">
                    <span className="img_container"><img /></span>
                    <h2>Fabricio Oliveira</h2>
                    <p>27 Anos</p>
                    <p>Masculino</p>
                </div>
            </aside>
    </React.Fragment>