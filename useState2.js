import React from 'react';
import './App.css';

export default function App() {
  
  const result = React.useState("yes")
  console.log(result)

  return (
    <div>
      <h1>Is state important to know?</h1>
      <div>
        <h1>{result[0]}</h1>
      </div>
    </div>
  )
};
