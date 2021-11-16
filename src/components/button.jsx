import React from "react"

export default function Button({ style, size, text, action }) {
  function doAction(action) {
    console.log(action)
  }
  const classStyle = !!style ? "button--" + style : ""
  const classSize = !!size ? "button--" + size : ""

  return (
    <button
      className={`button ${classStyle} ${classSize}`}
      onClick={() => doAction(action)}
    >
      {text}
    </button>
  )
}
