import React from "react"
import logo from "../images/logo-viblio.svg"
import dart from "../images/dart-down.svg"

export default function SectionCoverBusiness() {
  return (
    <section id="cover" className="cover">
      <div className="cover--container container columns">
        <div className="column cover-business--content">
          <h3 className="cover-business--title">
            Scopri la nuova esperienza di <strong>Open & Social Learning</strong> 
          </h3>
          <h2>
          Metti la <strong>conoscenza</strong> nelle mani dei tuoi dipendenti e ingaggiali nel modo più naturale,secondo i loro <strong>bisogni</strong> ed in maniera <strong>sociale</strong>.
          </h2>
          <p className="cover--subtitle">
            Come? <br /> Seguimi e lo scoprirai.
          </p>
          <a href="#features" target="_self">
            <img src={dart} alt="dart down" height="40px" />
          </a>
        </div>
        <div className="column cover-business--content"></div>
        <h3>Form</h3>
        </div>
      </div>
    </section>
  )
}
