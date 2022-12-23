import React from 'react';
import './App.css';

export default function App() {

  const [isGoingOut, setIsGoingOut] = React.useState(true)

  function changeMind() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <div className='counter'>
      <h1>Do I feel like going out tonight?</h1>
      <h4>Click on button</h4>
      <div onClick={changeMind}>
        <h1 className='h1--changeMind'>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  )
};
