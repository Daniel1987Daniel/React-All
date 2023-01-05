import React from 'react';
import './App.css';

export default function App() {

  const [count, setCount] = React.useState(0)
  
  function plus() {
    setCount(count => count + 1)
  }

  function minus() {
    setCount(count => count - 1)
  }

  return (
    <div className='counter'>
      <button className='counter--minus' onClick={minus}>-</button>
      <div className='counter--count'>
        <h1>{count}</h1>
      </div>
      <button className='counter--plus' onClick={plus}>+</button>
    </div>
  )
};
