import React from "react"
import Button from "./button"
import logo from "../images/logo-viblio.svg"
import LanguageDropdown from "./language_dropdown";

export default function Header() {
  const {languages, originalPath} = useI18next();
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
        <LanguageDropdown></LanguageDropdown>
        <div className="header--action">
          <Button style="primary" text="login" size="small" action="login"/>
        </div>
      </div>
    </header>
  )
}
