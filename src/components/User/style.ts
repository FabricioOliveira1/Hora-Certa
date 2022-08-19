import styled from 'styled-components'


export const Container = styled.aside`

    background-color: #009183;
    display: block;
    grid-row: 1 / 5;
    grid-column: 1 / 3;
    font-weight: 400;

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 100px);
}

.info .img_container img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 3px solid #31beb0;
    
}


.title {
    font-family: 'Varela Round', sans-serif;
    font-size: 27px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100px;
}

@media (max-width: 900px) {
        display: none;
        
    }
`
