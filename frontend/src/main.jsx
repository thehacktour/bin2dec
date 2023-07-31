import React from 'react'
import ReactDOM from 'react-dom/client'
import GeradorDeBinario from './binario.jsx'
import GeradorDeDecimal from './decimal.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Tradutor de Binario e Decimal!</h1>
    <GeradorDeBinario/>
    <GeradorDeDecimal/>
  </React.StrictMode>,
)
