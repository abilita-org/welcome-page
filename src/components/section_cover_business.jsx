import React from "react"
import FormContact from "../forms/form-contact"
//import logo from "../images/logo-viblio.svg"
//import dart from "../images/dart-down.svg"

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
          <p >
          Viblio monitora l'evoluzione dei ruoli e suggerisce contenuti per stare al passo, così le tue persone possono costruire abilità e competenze, ogni volta che ne hanno bisogno, nel formato che preferiscono, al proprio ritmo all'interno di un'esperienza di social learning.
          </p>
        </div>
        <div className="column cover-business--content">
        <FormContact />
        </div>
      </div>
    </section>
  )
}
