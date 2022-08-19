import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(4px);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        background: #fff;
        border-radius: 1rem;
        padding: 2rem;

        max-width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

    }
`