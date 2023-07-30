import { useState } from 'react'

const MainComponent = () => {

  const [inputValue, setInputValue] = useState('')

  const manipuladorDeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'-8  0vh'}}>
        <h1 style={{color:'blue', fontFamily:'Arial'}}>Tradutor de Binario</h1>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'-80vh'}}>
        <h3 style={{color:'ActiveBorder', fontFamily:'Georgia'}}>Adicione seu número binario: {inputValue}</h3>
        <input
          type="number"
          value={inputValue}
          onChange={manipuladorDeInput}
        />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'-80vh'}}  >
        <h3>Resultado: </h3>
        <h3></h3>
      </div>
    </div>
  );
}

export default MainComponent