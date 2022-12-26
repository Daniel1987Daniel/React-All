import React from 'react';
import './App.css';

export default function App() {

  const [thingsArray, setThingsArray] = React.useState(["Things 1", "Things 2"])

  function addItem() {
    setThingsArray(prevThingsArray => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
  }

  const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div className='counter'>
      <button onClick={addItem}>Add item</button>
      {thingsElement}
    </div>
  )
};
