import styled from 'styled-components'


export const Container = styled.header`
    
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column: 1 / 5;

    @media (max-width: 900px) {  
        height: 3.5rem;
    }

    div {
        display: none;
        gap: 1rem;
        padding-left: 2rem;

        h1 {
            font-family: 'Varela Round', sans-serif;
            font-size: 1.8rem;
        }
    }

    @media (max-width: 900px) {  
        
        justify-content: space-between;

        div {
            display: flex;
        }

    }
    
`

export const Button = styled.button`
    
        border-radius: 50px;
        border: none;
        height: 2.5rem;
        
        font-size: 20px;
        background-color: #009183;
        padding-inline: 7px;
        margin-right: 5px;
        color: #fff;
    

    &:hover{
        background-color: #fff;
        color: #009183;
        border: 1px solid;
        border-color: #009183;
        transition: 0.2s;
    }

    @media (max-width: 900px) {  
        height: 2.5rem;


    }
`











