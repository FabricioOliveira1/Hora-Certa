import styled from 'styled-components'

export const Container = styled.div`

    background-color: #009183;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    grid-column: 1 / 7;

    @media (max-width: 900px) {
        width: 100vw;
        height: 3.5rem;
        position: fixed;
        bottom: 0;
    }

`


