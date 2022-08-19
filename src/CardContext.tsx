import React, { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

import  add from 'date-fns/add'
import toDate from 'date-fns/toDate'
import { isConditionalExpression } from 'typescript';


interface CardProps { 
    id:number,
    medicamento: string,
    descricao: string,
    intervalo: number,
    qtdCartela: number,
    createdAt: string,
    nextAplication: string,
}

type CardPropsInput = Omit<CardProps, 'id' | 'createdAt' | 'nextAplication'| 'lastAplication'>



interface CardProviderProps {
    children: ReactNode;
}

interface CardContextProps {
    cards: CardProps[],
    createCard: (card: CardPropsInput) => Promise<void>,
    deleteCard: (id: number) => Promise<void>,
    handleLogin: (userName: string) => void,
    logged: boolean,
    passedUserName: string,
    }



export const CardContext = createContext<CardContextProps>(
    {} as CardContextProps
);

export function CardProvider({ children }:CardProviderProps) {

    const [passedUserName, setPassaedUserName] = useState('')
    const [cards, setCards] = useState<CardProps[]>([])
    const [logged, setlogged] = useState(false)

    useEffect(() => {
          api.get('/main')
            .then(response => setCards(response.data.cards))
    },[])

    async function createCard (cardInput: CardPropsInput) {


        const createdAt = new Date()
        const nextAplication = toDate(add(new Date(createdAt), {hours: cardInput.intervalo}))

        const response = await api.post('/main', {
            ...cardInput,
            createdAt: new Date(),
            nextAplication,
        });
        const { card } = response.data;

        setCards([
            ...cards,
            card,
        ])
    }

    async function deleteCard (id: number) {  
        const cardsFiltered = cards.filter(card => card.id !== id);
        setCards(cardsFiltered)
    }

    function handleLogin (userName: string) {    
        
        setPassaedUserName(userName)
        setlogged(true)
    }

    
    return (
        <CardContext.Provider value={{ cards, createCard, deleteCard, handleLogin, logged, passedUserName}}>
            {children}
        </CardContext.Provider>
    )
}