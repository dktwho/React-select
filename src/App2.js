
import React, { useState } from 'react'

const App2 = () => {
  const [value, setValue] = useState('')

  const [age, setAge] = useState('')

  const texts = ['text1', 'text2', 'text3']
  const [value2, setValue2] = useState('')
  const option = texts.map((el, idx) => {
    return <option key={idx} value={idx}>{el}</option>
  })


  return (
    <div className='App'>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="1">text1</option>
        <option value="2">text2</option>
        <option value="3">text3</option>
      </select>
      <p>
        {value  === '1' && 'first'}
        {value  === '2' && 'second'}
        {value  === '3' && 'third'}

      </p>
      <br />
      <br />
      <hr />

      <select value={age} onChange={(e) => setAge(e.target.value)}>
        <option value="1">0-12</option>
        <option value="2">13-17</option>
        <option value="3">18-25</option>
        <option value="4">more then 25</option>
      </select>
      <p>
        {age === '1' && 'at 0 - to 12'}
        {age === '2' && 'at 13 - to 17'}
        {age === '3' && 'at 18 - to 25'}
        {age === '4' && 'at 25 - to infinity'}

      </p>
      <br />
      <br />
      <hr />

      <select value={value2} onChange={(e) => setValue2(e.target.value)}>
        { option  }
      
      </select>
      <p>Ваш выбор: value option-a (из idx ) {value2} - значение   {texts[value2]}</p>
      
    </div>
  )
}

export default App2
