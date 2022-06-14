import React from "react";
import './Card.css'


export default function Card (props) {

   

    return (
            <div className="card">                
                <h2>{props.cardData.medicine}</h2>
                <p>{props.cardData.description}</p>
                <p>{props.cardData.interval}</p>
                <p>{props.cardData.amount}</p>
                <p>proxima aplicação</p> 
            </div> 
    )
}
