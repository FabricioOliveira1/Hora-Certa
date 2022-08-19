import styled from 'styled-components'

export const Container = styled.div`

    background-color: #ccc;

    overflow: auto;

    padding: 5px;
    
    grid-column: 3 / 7;
    grid-row: 2 / 5;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;

    @media (max-width: 900px) {
        height: 100vh;
        
    }

`



    
