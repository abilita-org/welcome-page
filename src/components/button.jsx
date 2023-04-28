import React from "react"

const loginLink =
  "https://auth.viblio.com/realms/viblioprod/protocol/openid-connect/auth?client_id=www-prod&redirect_uri=https%3A%2F%2Fwww.apprendo.ai%2F&response_mode=fragment&response_type=code&scope=openid"

const schedulerLink = "https://viblio.as.me/"

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
      case "scheduler":
        window.open(schedulerLink, "_blank")
        break
      case "login":
        window.open(loginLink, "_blank")
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
      className={`button ${classStyle} ${classSize}`}
      onClick={e => doAction(e, action)}
    >
      {text}
    </button>
  )
}
