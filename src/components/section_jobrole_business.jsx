import React from "react"
import Button from "./button"


export default function SectionJobRoleBusiness() {
  return (
    <section id="jobrole" className="jobrole">
      <div className="cover--container container columns">
        <div className="column cover-business--content">
          <h1>IMMAGINE/VIDEO</h1>
        </div>
        <div className="column cover-business--content">
            <h1 className="feature--title">Job role Intelligence, &amp; Social Learning experience integrata</h1>
            <p>Immagina di avere un Digital mentor che ti suggerisce quali  sono le hot skills di ogni ruolo, analizza i tratti della tua personalità per le tue persone, fornisce i saperi da sviluppare insieme ai migliori contenti internazionale da poter consumare, in tempo reale.
            Immagina di poter creare le Playlist per i percorsi di sviluppo per le tue persone in maniera personalizzata e dare contemporaneamente la libertà ad ognuno di esprimere i propri interessi e trovare contenuti secondo le proprie esigenze in ogni momento, in coerenza con il proprio stile di apprendimento.
            Immagina di avere sempre dei nuovi consigli, nuovi suggerimenti, sempre rigorosamente su misura per ciascuno dei tuoi collaboratori.
            Apri gli occhi sei su Viblio
            </p>
            <Button style="primary" text="Prenota una Demo" size="big" action="scheduler"/>
        </div>
      </div>
    </section>
  )
}