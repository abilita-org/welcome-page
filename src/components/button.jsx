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
  function doAction(event, action) {
    switch (action) {
      case "login":
        window.open("https://www.apprendo.ai/login", "_blank")
        break
      case "modal":
        fireAction(target)
        break
      default:
        fireAction(event)
        break
    }
  }

  const classStyle = !!style ? "button--" + style : ""
  const classSize = !!size ? "button--" + size : ""

  return (
    <button
      disabled={disabled}
      className={`button ${classStyle} ${classSize}`}
      onClick={e => doAction(e, action)}
    >
      {text}
    </button>
  )
}
