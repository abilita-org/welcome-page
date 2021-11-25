import React from "react"

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
      case "event":
        fireAction(event)
        break
      default:
        console.log(event)
    }
  }

  const classStyle = !!style ? "button--" + style : ""
  const classSize = !!size ? "button--" + size : ""

  return (
    <button
      disabled={disabled}
      type={action === "submit" ? "submit" : "button"}
      className={`button ${classStyle} ${classSize}`}
      onClick={e => doAction(e, action)}
    >
      {text}
    </button>
  )
}
