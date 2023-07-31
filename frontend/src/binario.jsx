import { useState } from 'react'
import './styles/borda.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { CssBaseline, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Crie um tema personalizado com a cor de fundo que você deseja
const theme = createTheme({
  palette: {
    background: {
      default: '#15a5f5', // Substitua essa cor pela cor desejada (exemplo: azul claro)
    },
  },
});

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
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
      </ThemeProvider>
      <h2>Escreva seu Numero Decimal: </h2>
      <input
        type="number"
        value={decimalPreFuncao}
        onChange={acontecerNaTela}
        placeholder='Digite seu decimal'
      />

      <h2>Resultado em Binario: {decimalComFuncao}</h2>
      <Button onClick={deletarBinario} variant="outlined" startIcon={<DeleteIcon/>}>Apagar</Button>
    </div>
  );
}

export default GeradorDeBinario