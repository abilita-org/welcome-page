import React, { useState } from "react"


export default function Question({ id, question, answer,onClick = () => null }) {
  function toggleText() {
    let answer = document.getElementById(`answer-${id}`);
    console.log(answer.style.display)
    if(answer.style.display == 'none' || answer.style.display == ''){
      answer.style.display = 'block'
    }else{
      answer.style.display = 'none'
    }
  }
  return (
    <div className="question--container">
      <div id={`question-${id}`} class="question" onClick={() => toggleText()}>{question}</div>
      <div id={`answer-${id}`} class="answer">{answer}</div>    
    </div>
  )
}
