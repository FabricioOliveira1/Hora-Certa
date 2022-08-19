import React, { useEffect, useState, useContext } from "react";
import { Container, Hour, Info } from './style'

import { CardContext } from "../../CardContext";

import toDate from 'date-fns/toDate'
import format from 'date-fns/format'
import compareAsc from 'date-fns/compareAsc'


interface CardProps {
    id: number,
    medicamento: string,
    descricao: string,
    intervalo: number,
    qtdCartela: number,
    createdAt: string,
    nextAplication: string,
}

interface Props {
    key: number,
    card: CardProps,
}

// interface isLateProps {
//     isLate: -1 | 0 | 1;
// }



export function Card ({card }: Props) {

    const { deleteCard } = useContext(CardContext)

    //const [lastAplication, setLastAplication] = useState(format(toDate(new Date()), 'HH:mm'));
    const [isLate, setIsLate] = useState(1);

    useEffect(() => {
        setIsLate(compareAsc(toDate(new Date(card.nextAplication)), toDate(new Date())))

    },[])

   async function handleConsumeMedicine() {
        await deleteCard(card.id)
   }

    return (
            <Container>    
                <Hour onClick={handleConsumeMedicine} isLate={isLate}> {/* se a proxima aplicação for menor que a data atual retorna red*/ }
                    <h1>{`Proxima Aplicação:`}</h1>
                    <p className="hour-display">{format(toDate(new Date(card.nextAplication)), 'HH:mm')}</p>
                    <p>Clique para consumir</p>
                </Hour>
                <Info>
                    <h2>{card.medicamento}</h2>
                    <p>Ultima aplicação:  {format(toDate(new Date(card.createdAt)), 'HH:mm')}</p>

                </Info>            
            </Container> 
    )
}
