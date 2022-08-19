import React, { useContext }  from "react"
import { Login } from "../../components/Login"
import { Box } from "../../components/Box"

import { CardContext } from "../../CardContext"

import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export function Home () {

    const { logged } = useContext(CardContext)

    return (
        <Container>

        {logged ? <Box /> : <Login />}

                    
        </Container>       
    )
}