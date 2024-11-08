import React, { useState } from 'react';


function Contador() {  
  const [numero, setNumero] = useState(0);

    const incrementar = () => {
    setNumero(numero + 1);
  };

    const decrementar = () => {
    setNumero(numero - 1);
  };

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;