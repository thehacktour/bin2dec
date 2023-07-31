import { useState } from 'react'

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

  return (
    <div>
      <h2>Escreva seu Numero Decimal: </h2>
      <input
        type="number"
        value={decimalPreFuncao}
        onChange={acontecerNaTela}
      />

      <h2>Resultado: {decimalComFuncao}</h2>
    </div>
  );
}

export default GeradorDeBinario