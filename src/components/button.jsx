import React from "react"
import { navigate } from "gatsby"

export default function Button({
  target,
  style,
  size,
  text,
  action,
  disabled = false,
  fireAction = () => null,
}) {
  function doAction(action) {
    switch (action) {
      case "login":
        navigate("#")
        break
      case "modal":
        fireAction(target)
        break
      case "submit": 
        fireAction()
    }
  }

  const classStyle = !!style ? "button--" + style : ""
  const classSize = !!size ? "button--" + size : ""

  return (
    <button
      disabled={disabled}
      className={`button ${classStyle} ${classSize}`}
      onClick={() => doAction(action)}
    >
      {text}
    </button>
  )
}
