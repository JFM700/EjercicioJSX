import React from 'react';
import Saludo from './Saludo';
import Despedida from './Despedida';

function App() {

  const mostrarSaludo = true;
  const nombre = 'Jesús';

  return (
  <div>
    {mostrarSaludo ? <Saludo nombre={nombre} /> : <Despedida nombre={nombre} />}
  </div>  
  )

}

export default App;
