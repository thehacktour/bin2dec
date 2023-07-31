import { useState } from 'react'
import './styles/borda.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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
        placeholder='Digite seu binário'
      />
      <h2>Resultado em Decimal: {binarioIncremento}</h2>
      <Button onClick={deletarBinario} variant="outlined" startIcon={<DeleteIcon/>}>Apagar</Button>
    </div>
  );
}

export default GeradorDeDecimal