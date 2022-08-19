import React from 'react'

import { GlobalStyle } from "./global";
import  { Home }  from "./pages/Home";
import { CardProvider } from './CardContext'

function App() {
  return ( 
    <CardProvider >

      <Home />
      
      <GlobalStyle />

    </CardProvider>  
  )
}

export default App;




