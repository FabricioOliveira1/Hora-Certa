import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createServer, Model } from 'miragejs'  

createServer({

  models: {
    card: Model,
  },

  seeds(server){
    server.db.loadData({
      cards: [
        {
          id:1,
          medicamento: 'Dipirona',
          intervalo: 8,
          qtdCartela: 30,
          descricao: 'Dor de Cabeça',
          createdAt: new Date(),
          nextAplication: '2036-09-03T21:32:27.504Z',
          lastAplication: new Date(),
        },
        
        
        
      ]
    })
  },

  routes() {
    this.namespace ='api';

    this.get('/main', () => {
      return this.schema.all('card')
    })

    this.post('/main', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('card', data);
    })

  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

