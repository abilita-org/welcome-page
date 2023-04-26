import React from "react"
import logo from "../images/logo-viblio.svg"
import dart from "../images/dart-down.svg"

export default function SectionCoverBusiness() {
  return (
    <section id="cover" className="cover">
      <div className="cover--container container columns">
        <div className="cover--content">
          <h1 className="cover--title">
            Ciao, mi chiamo <span style={{ display: "none" }}>Viblio</span>
            <br />
            <img className="cover--logo" src={logo} alt="logo viblio" />
          </h1>
          <p className="cover--subtitle">
            Sono una guida per il tuo percorso di apprendimento nell’universo
            della conoscenza. Raccolgo e seleziono per te i contenuti delle
            migliori piattaforme digitali al mondo, rendendoti il protagonista
            della tua crescita.
          </p>
          <p className="cover--subtitle">
            Come? <br /> Seguimi e lo scoprirai.
          </p>
          <a href="#features" target="_self">
            <img src={dart} alt="dart down" height="40px" />
          </a>
        </div>
      </div>
    </section>
  )
}
