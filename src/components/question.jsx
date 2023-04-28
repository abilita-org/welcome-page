import React, { useState } from "react"
import inputChecked from "../images/checkbox-checked.svg"
import inputUnchecked from "../images/checkbox-unchecked.svg"

export default function Question({ id, question, answer,onClick = () => null }) {
  const ref = useRef(null);
  function toggleText() {
    let answer = document.getElementById(`answer-${id}`);
    console.log(answer.style)
  }
  return (
    <div className="question--container">
      <div id={`question-${id}`} class="question" onClick={() => toggleText()}>{question}</div>
      <div id={`answer-${id}`} class="answer">{answer}</div>    
    </div>
  )
}
