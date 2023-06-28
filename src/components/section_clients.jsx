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
                text="client-info"
                size="large"
                action="modal"
                target="contact"
                fireAction={e => showModal(e)}
              />
              <p>
                <Trans>client-info-des</Trans>
              </p>
            </div>
            <div className="clients--card">
              <img src={consumer} alt="industry" height="120px" />
              <br />
              <Button
                style="secondary"
                text="client-register"
                size="large"
                action="modal"
                target="consumer"
                fireAction={e => showModal(e)}
              />
              <p>
              <Trans>client-register-des</Trans>
              </p>
            </div>
          </div>
        </div>
        <div className="clients--columns columns">
          <div className="column clients--intro">
            <h3 className="clients--title"><Trans>client-business</Trans></h3>
            <p className="clients--decription">
            <Trans>client-business-des</Trans>
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
