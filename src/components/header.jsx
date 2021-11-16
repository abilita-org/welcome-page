import React from "react"
import Button from "./button"
import logo from "../images/logo-viblio.svg"

export default function Header() {
  return (
    <header className="header">
      <div className="header--container container">
        <a href="/" target="_self">
          <img
            className="header--logo"
            src={logo}
            alt="logo viblio"
            height="80px"
          />
        </a>
        <div className="header--action">
          <Button style="primary" text="login" size="small" />
        </div>
      </div>
    </header>
  )
}
