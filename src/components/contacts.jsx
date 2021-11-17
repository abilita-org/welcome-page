import React, { useState } from "react"
import Button from "./button"

import industry from "../images/industry.svg"
import consumer from "../images/consumer.svg"
import Modal from "./modal"
import Form from "./form"

export default function Contacts() {
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
    <section id="contacts" className="contacts">
      <div className="contacts--container container">
        <div className="contacts--columns columns">
          <div className="column contacts--intro">
            <h3 className="contacts--title">
              SEI INTERESSATO? <br /> PARLIAMONE.
            </h3>
            <p className="contacts--decription">
              Che tu sia un privato o un’azienda, contatta il mio team di
              esperti e avvia una conversazione: non te ne pentirai.
            </p>
          </div>
          <div className="contacts--cards columns">
            <div className="contacts--card">
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
            <div className="contacts--card">
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
                che proveranno la mia versione consumer.
              </p>
            </div>
          </div>
        </div>
        <div className="contacts--columns columns">
          <div className="column contacts--intro">
            <h3 className="contacts--title">SEI GIÀ UN CLIENTE BUSINESS?</h3>
            <p className="contacts--decription">
              Accedi qui, ti porterò direttamente al tuo profilo.
            </p>
          </div>
          <div className="contacts--cards">
            <Button style="primary" text="login" size="large" action="login" />
          </div>
        </div>
      </div>
      <Modal showModal={modal} hideModal={(e) => hideModal(e)}>
        <Form target={target} closeForm={(e) => hideModal(e)} />
      </Modal>
    </section>
  )
}
