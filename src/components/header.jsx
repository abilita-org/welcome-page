import React from "react"
import Button from "./button"
import logo from "../images/logo-viblio.svg"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

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
        <div className="header--languages-container">
          
        <ul className="header--languages">
        <span data-v-4295d220="" className="input-icon fas fa-globe"></span>
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
      </div>
        <div className="header--action">
          <Button style="primary" text="login" size="small" action="login"/>
        </div>
      </div>
    </header>
  )
}
