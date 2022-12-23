import React from 'react';
import './App.css';

export default function App() {

  const isGoingOut = true

  return (
    <div className='counter'>
      <h1>Do I feel like going out tonight?</h1>
      <div>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  )
};
