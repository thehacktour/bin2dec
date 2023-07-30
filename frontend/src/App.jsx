import { useState } from 'react'

const integerToBinary = (number) => {
  return number.toString(2);
};

const MainComponent = () => {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')

  const manipuladorDeInput = (event) => {
    const valor = event.target.value;
    setInputValue(valor);
    setResultValue(integerToBinary(parseInt(valor, 10) || 0));
  };

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'-8  0vh'}}>
        <h1 style={{color:'blue', fontFamily:'Arial'}}>Tradutor de Binario</h1>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'-80vh'}}>
        <h3 style={{color:'ActiveBorder', fontFamily:'Georgia'}}>Adicione seu número binario:</h3>
        <input
          type="number"
          value={inputValue}
          onChange={manipuladorDeInput}
        />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'-80vh'}}  >
        <h3>Resultado: {resultValue}</h3>
        <h3></h3>
      </div>
    </div>
  );
}

export default MainComponent