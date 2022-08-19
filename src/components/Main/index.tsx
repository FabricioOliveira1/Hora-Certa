import React, { useContext } from "react";
import { Container } from './style'
import { Card } from "../Card";
import { CardContext } from "../../CardContext";



export function Main (){  

    const { cards } = useContext(CardContext)
    
    return (
        <Container>
            {cards.map((card) => ( 
                <Card card={card} key={card.id}/>
            )
            )}
        </Container>
    )
}    