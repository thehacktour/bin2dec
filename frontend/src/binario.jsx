import { useState } from 'react'
import './styles/borda.css'

const integerToBinary = (number) => {
  return number.toString(2);
};

const GeradorDeBinario = () => {

  const [decimalPreFuncao, aparecerNaTela] = useState('');
  const [decimalComFuncao, aplicarFuncao] = useState('');

  const acontecerNaTela = (event) => {
    const valor = event.target.value;
    aparecerNaTela(valor);
    aplicarFuncao(integerToBinary(parseInt(valor, 10) || 0));
  }

  const deletarBinario = () => {
    aplicarFuncao('');
    aparecerNaTela('');
  }

  return (
    <div className="site-container">
      <h2>Escreva seu Numero Decimal: </h2>
      <input
        type="number"
        value={decimalPreFuncao}
        onChange={acontecerNaTela}
        placeholder='Digite seu decimal'
      />

      <h2>Resultado em Binario: {decimalComFuncao}</h2>
      <button onClick={deletarBinario}>
        Apagar
      </button>
    </div>
  );
}

export default GeradorDeBinario