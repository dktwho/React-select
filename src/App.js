import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('')
  const texts = ['Boston', 'LA', 'Denver']
  const [value1, setValue1] = useState('')

  const options = texts.map((text, index) => {
    return <option key={index}>{text}</option>
  })

  function handleChange(e) {
    setValue(e.target.value)
  }
  return (
    <div className="App">
      <select value={value} onChange={handleChange}>
        <option >city1</option>
        <option >city2</option>
        <option >city3</option>
      </select>
      <p>City choice: {value}</p>
      <br />
      <br />
      <hr />
      <select value={value1} onChange={(e) => setValue1(e.target.value)}>
        {options}

      </select>
      <p>City: {value1}</p>

    </div>
  );
}

export default App;
