import React from "react";
import './Main.css'
import Card from './Card'

export default function Main(props){  

    const cardList = props.cardList;
   
    return (
        <div className="main">
            {cardList.map(card => 
              <Card key={cardList.medicine} cardData={card} />  
            )}
        </div>
    )
}    