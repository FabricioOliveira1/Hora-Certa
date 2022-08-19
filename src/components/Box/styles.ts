import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 20px;
    width: 992px;
    height: 600px;
    overflow: hidden;
    box-shadow: 5px 5px 15px -5px #000000;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 70px repeat(3, 1fr) 70px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    
    
.header { grid-area: 1 / 3 / 2 / 7; }
.user { grid-area: 1 / 1 / 5 / 3; }
.main { grid-area: 2 / 3 / 5 / 7; }
.footer { grid-area: 5 / 1 / 6 / 7; }

@media (max-width: 900px) {
    height: 100vh;
    witdh: 100%;
    border-radius: 0;
    
    display: block;
    
}

`

