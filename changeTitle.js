import "./Example.css"
import { useState } from "react"

const Example = () => {
  const [title, setTitle] = useState("My title")
  const [buttonText, setbuttonText] = useState("Original text")

  const newTitle = () => {
    setTitle("My new title")
  }

  const newTitle2 = () => {
    setTitle("xxxxxxxxxxxxx")
  }

  const deleteAll = () => {
    setTitle("")
  }

  const buttonChange = () => {
    setbuttonText("New text ")
  }

  return (
    <div>
      <h1>{title}</h1>
      <button type="button" onClick={newTitle}>Click here</button>
      <button type="button" onClick={newTitle2}>Change title</button>
      <button type="button" onClick={deleteAll}>Change title</button>
      <button type="button" onClick={buttonChange}>{buttonText}</button>
    </div>
  )
}

export default Example
