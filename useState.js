import React from 'react';
import './App.css';

export default function App() {

  const [important, setImportant] = React.useState("Yes")
  console.log(important)

  function handleClick() {
    setImportant("No")
  }

  return (
    <div>
      <h1>Is state important to know?</h1>
      <div onClick={handleClick}>
        <h1>{important}</h1>
      </div>
    </div>
  )
};
