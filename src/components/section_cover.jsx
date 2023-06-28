import React from "react"
import logo from "../images/logo-viblio.svg"
import dart from "../images/dart-down.svg"

import {Trans} from 'gatsby-plugin-react-i18next';

export default function SectionCover() {

  return (
    <section id="cover" className="cover">
      <div className="cover--container container">
        <div className="cover--content">
          <h1 className="cover--title">
            <Trans>Hello, my name is</Trans> <span style={{ display: "none" }}>Viblio</span>
            <br />
            <img className="cover--logo" src={logo} alt="logo viblio" />
          </h1>
          <p className="cover--subtitle">
          <Trans>hello-header</Trans>
          </p>
          <p className="cover--subtitle">
          <Trans>how</Trans> <br /> <Trans>find</Trans>
          </p>
          <a href="#features" target="_self">
            <img src={dart} alt="dart down" height="40px" />
          </a>
        </div>
      </div>
    </section>
  )
}
