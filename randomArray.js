import React from "react";

export default function Meme() {

  const thingsArray = ["Thing 1", "Thing 2"]

  function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`
    thingsArray.push(newThingText)
    document.getElementById("newArray")
    console.log(thingsArray)
  }

  const thingsElem = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElem}
    </div>
  )
}
