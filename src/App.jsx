import { useState } from 'react';
import Values from 'values.js';
import './App.module.css';
import { FormColor } from './components/FormColor';
import { DisplayColors } from './components/DisplayColors';

function App() {
  const [list, setList] = useState(new Values('blue').all(5)); // si cambio por 10 me trae solo 20 colores

  console.log(list);

  return (
    <div className="App">
      <FormColor setList={setList} />
      <DisplayColors list={list} />
    </div>
  );
}

export default App;
