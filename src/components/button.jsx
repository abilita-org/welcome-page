import React from "react"
import {Trans} from 'gatsby-plugin-react-i18next';

const loginLink =
  "https://auth.viblio.com/realms/viblioprod/protocol/openid-connect/auth?client_id=www-prod&redirect_uri=https%3A%2F%2Fapp.viblio.com%2F&response_mode=fragment&response_type=code&scope=openid"

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
      <Trans>{text}</Trans>
    </button>
  )
}
