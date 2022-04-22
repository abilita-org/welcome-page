import React, { useState } from "react"
import Button from "./button"

import industry from "../images/industry.svg"
import consumer from "../images/consumer.svg"
import Modal from "./modal"
import FormClients from "../forms/form-clients"

export default function SectionClients() {
  const [modal, setModal] = useState(false)
  const [target, setTarget] = useState("")

  function showModal(t) {
    setTarget(t)
    setModal(true)
  }
  function hideModal() {
    setTarget("")
    setModal(false)
  }

  return (
    <section id="clients" className="clients">
      <div className="clients--container container">
        <div className="clients--columns columns">
          <div className="column clients--intro">
            <h3 className="clients--title">
              SEI INTERESSATO? <br /> PARLIAMONE.
            </h3>
            <p className="clients--decription">
              Che tu sia un privato o un’azienda, contatta il mio team di
              esperti e avvia una conversazione: non te ne pentirai.
            </p>
          </div>
          <div className="clients--cards columns">
            <div className="clients--card">
              <img src={industry} alt="industry" height="120px" />
              <br />
              <Button
                style="secondary"
                text="contatta"
                size="large"
                action="modal"
                target="business"
                fireAction={e => showModal(e)}
              />
              <p>
                Scrivi ai miei learning experts, capiranno con te le necessità
                della tua azienda.
              </p>
            </div>
            <div className="clients--card">
              <img src={consumer} alt="industry" height="120px" />
              <br />
              <Button
                style="secondary"
                text="iscriviti"
                size="large"
                action="modal"
                target="consumer"
                fireAction={e => showModal(e)}
              />
              <p>
                Lascia qui la tua mail ed entra a far parte dei 1000 beta tester
                che proveranno la mia versione flexible & light.
              </p>
            </div>
          </div>
        </div>
        <div className="clients--columns columns">
          <div className="column clients--intro">
            <h3 className="clients--title">SEI GIÀ UN CLIENTE BUSINESS?</h3>
            <p className="clients--decription">
              Accedi qui, ti porterò direttamente al tuo profilo.
            </p>
          </div>
          <div className="clients--cards">
            <Button style="primary" text="login" size="large" action="login" />
          </div>
        </div>
      </div>
      <Modal showModal={modal} hideModal={(e) => hideModal(e)}>
        <FormClients id="clients_form" target={target} closeForm={(e) => hideModal(e)} />
      </Modal>
    </section>
  )
}
