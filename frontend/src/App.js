import React, { useState } from 'react';

import Header from './Header'

function App() {

  let [counter, setCounter] = useState(0)

  // Array [ valor, Update function]

  function increment() {
    setCounter(++counter)
    console.log(" counter = ", counter)
  }

  return (
    <div>
      <Header title="Semana OmniStack">
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}

export default App;
