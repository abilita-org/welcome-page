import React, { useState } from "react"
import Button from "./button"
import {Trans} from 'gatsby-plugin-react-i18next';

import industry from "../images/industry.svg"
import consumer from "../images/consumer.svg"
import Modal from "./modal"
import FormClients from "../forms/form-clients"
import FormContact from "../forms/form-contact"

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
              <Trans>client-interested</Trans> <br /> <Trans>client-talk</Trans>
            </h3>
            <p className="clients--decription">
            <Trans>client-description</Trans>
            </p>
          </div>
          <div className="clients--cards columns">
            <div className="clients--card">
              <img src={industry} alt="industry" height="120px" />
              <br />
              <Button
                style="secondary"
                text="richiedi info"
                size="large"
                action="modal"
                target="contact"
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
                Lascia qui la tua email, il tuo ruolo ed un argomento
                d’interesse per richiedere una demo gratuita.
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
      <Modal showModal={modal} hideModal={e => hideModal(e)}>
        {target === "contact" ? (
          <FormContact id="contact_form" closeForm={e => hideModal(e)} />
        ) : (
          <FormClients id="clients_form" closeForm={e => hideModal(e)} />
        )}
      </Modal>
    </section>
  )
}
