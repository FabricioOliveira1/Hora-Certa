 import styled from 'styled-components'


export const Container = styled.form`
    
    
    h2,
    label,
    input,
    textarea,
    button {
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        width: 100%;
        padding: 0 1rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        resize: none;
    }
    textarea {
        padding-block: 1rem;
    }

    .container-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
    }

    .container-input{
        display: flex;
        justify-content: space-between;
    }

    button {
        width: 50%;
        padding: 0 1.5rem;
        height: 4rem;
        
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1.2rem;
        margin-top: 1.5rem;

        &:hover {
            filter: brightness(0.9);
        }

        transition: filter 0.2s;
    }
    button[type='submit'] {
        background-color: green;
    }
    .button-close {
        background-color: red;
        
    }

    @media (max-width: 900px) {
        .container-input {
            flex-direction: column;
        }
    }

`
