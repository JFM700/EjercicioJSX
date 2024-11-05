import React from 'react';

function ListadeCoches () {

  const coche = [{Matricula: '1425BTY', Marca: 'Peugeot', Modelo:'3008', Tipo:'híbrido'},

    {Matricula: '1762MNY', Marca: 'Mercedes', Modelo:'EQS', Tipo:'Diesel'},
    
    {Matricula: '9882TPK', Marca: 'Renault', Modelo:'4 E-Tech', Tipo:'Eléctrico'}, 

    {Matricula: '6634TRV', Marca: 'Volswagen', Modelo:'Golf', Tipo:'Gasolina'}, 
    
    {Matricula: '2285RPL', Marca: 'Toyota', Modelo:'RAV4', Tipo:'hibrido'}, 
    
    {Matricula: '1782PRT', Marca: 'Peugeot', Modelo:'5008', Tipo:'diesel'}];

  return (
    <div>
      <div class="StyledTextComponent">
      <h2>Lista de coches:</h2>
      <ul>
        {coche.map(item => (
          <li key ={item.coche}>{item.Matricula}- {item.Modelo} {item.Marca} ({item.Tipo})</li>))}
      </ul>
      </div>
    </div>    
  )

}

export default ListadeCoches;