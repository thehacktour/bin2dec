import { useState } from 'react'
import './styles/borda.css'

const binaryToDecimal = (binaryNumber) => {
  // Verifica se a entrada é um número binário válido (contendo apenas 0 e 1)
  const binaryRegex = /^[0-1]+$/;
  if (!binaryRegex.test(binaryNumber)) {
    return "Entrada inválida! Digite apenas 0 e 1.";
  }

  // Converte o número binário para decimal
  const decimalNumber = parseInt(binaryNumber, 2);
  return decimalNumber;
};
const GeradorDeDecimal = () => {

  const [binarioInicial, aparecerNaTela] = useState('');
  const [binarioIncremento, aparecerIncremento] = useState('');

  const manipuladorDeDecimal = (event) => {
    const valor = event.target.value;
    aparecerNaTela(valor);
    aparecerIncremento(binaryToDecimal(valor));
  }

  const deletarBinario = () =>{
    aparecerIncremento('');
    aparecerNaTela('');
  }

  return (
    <div className="site-container">
      <h2>Escreva seu Numero Binario:</h2>
      <input
        type="number"
        value={binarioInicial}
        onChange={manipuladorDeDecimal}
      />
      <h2>Resultado: {binarioIncremento}</h2>
      <button onClick={deletarBinario}>Apagar</button>
    </div>
  );
}

export default GeradorDeDecimal