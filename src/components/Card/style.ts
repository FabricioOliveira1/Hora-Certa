import styled from 'styled-components'

interface HourProps {
    isLate: number;
}

export const Container = styled.div`

width: 100%;
height: 150px;

font-weight: 400;

background-color: #fff;
color: black;

display: flex;
flex-direction: row;
flex-shrink: 0;

border-radius: 10px;

overflow: hidden;


p,
h2 {
    margin: 0;
    padding: 0;
}
`

export const Hour = styled.button<HourProps>`

    width: 30%;

    transition: width 0.3s;

    display: grid;
    grid-template-rows: 1fr 2fr;

    padding: 2px;
    border: none;
    
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: #fff;
    cursor: pointer;

    background: ${(props) => props.isLate == 1 ? 'green' : 'red'};

    position: relative;

    ${Container}:hover & {
        width: 100%;

        p, button {
        display: block;
        }

    }

    
    h1 {
        font-size: 1rem;
        font-weight: 600;
    }

    p {
        display: none;
    }

    p.hour-display{
        font-size: 2rem;
        display: block;
    }
`

export const Info = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 70%;

    transition: width 0.3s;

    padding: 2px 0 0 ;

    margin-left: 10px;

    ${Container}:hover & {
        width: 0%;
        margin-left: 0;
    }
`
