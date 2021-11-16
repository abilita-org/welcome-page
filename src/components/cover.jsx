import React from "react"
import logo from "../images/logo-viblio.svg"
import arrow from "../images/arrow-down.svg"

export default function Cover() {
  return (
    <section id="cover" className="cover">
      <div className="cover--container container">
        <div className="cover--content">
          <h1 className="cover--title">
            Ciao, mi chiamo <br />
            <img
              className="cover--logo"
              src={logo}
              alt="logo viblio"
            />
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
          <img src={arrow} alt="arrow down" height="40px" />
        </div>
      </div>
    </section>
  )
}
