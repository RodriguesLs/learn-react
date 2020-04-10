import React from 'react';

const names = ['Paula', 'Roberta', 'Mariana', 'Juliana', 'Késia']

export default () => {
  
  const generateList = names => names.map(name => <li key={name.toString()}>{ name }</li>)

  return (
    <ul>
      {generateList(names)}
    </ul>
  )
} 