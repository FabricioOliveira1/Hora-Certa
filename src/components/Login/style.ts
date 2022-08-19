import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #009183;
    flex-shrink: 0;

    .footer {
        position: fixed;
        bottom: 30px;
    }

    h1 {
    font-family: 'Varela Round', sans-serif;
    font-size: 27px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
    .container-button {
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;
        flex-shrink: 0;

        .container-input {
        display: flex;
        flex-direction: row;


        input {
            height: 3rem;
            border: none;
            padding: 0.5rem 0 0.5rem 1rem;
            border-radius: 2rem 0 0 2rem;
        }

        button {
            padding: 0;
            width: 50px;
            border-radius: 0 2rem 2rem 0;
        }
    }
    }

    button {
        width: 200px;
        padding: 0 1.5rem;
        height: 3rem;
        
        color: #000;
        border-radius: 1.5rem;
        border: 0;
        font-size: 1.2rem;
        
        cursor: pointer;

        &:hover {
            filter: brightness(0.9);
        }

        transition: filter 0.2s;
    }

    .close-button {
        width: 50px;
        border-radius: 0px;
        
    }

`