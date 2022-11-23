import React, { useState } from "react"
import SendRequest from "../api/request"
import Field from "../components/field"
import Button from "../components/button"

const data = {
  title: "Le persone come te fanno la differenza",
  description: "Entra nella community di Viblio",
}

const defaultFields = {
  name: "",
  surname: "",
  email: "",
  company: "",
  role: "",
  skill: "",
}

export default function FormClients({ id, closeForm = () => null }) {
  const [fields, setFields] = useState(defaultFields)
  const [validForm, setValidForm] = useState(false)
  const [requestState, setRequestState] = useState(null)

  function updateField({ target }) {
    const _fields = { ...fields }
    const id = target.id
    const value = target.value
    _fields[id] = value
    validateform(_fields)
    setFields(_fields)
  }

  function validateform(_fields) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const fieldsErrors = Object.keys(fields).filter(field => {
      switch (field) {
        case "email":
          return !re.test(String(_fields.email).toLowerCase())
        case "company":
          return false
        default:
          return !_fields[field].length
      }
    }).length
    setRequestState(null)
    setValidForm(!fieldsErrors)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const comment = `Nome cognome: ${fields.name} ${fields.surname}\nOrganizzazione: ${fields.company}\nRuolo: ${fields.role}\nCompetenze: ${fields.skill}`
    const data = {
      created_at: new Date(),
      requester: {
        name: [fields.name, fields.surname].join(" "),
        email: fields.email,
      },
      type: "task",
      subject: "Richiesta di iscrizione",
      comment: { body: comment },
    }
    setRequestState("loading")
    const response = await SendRequest(data)
    setRequestState(response)
  }

  function handleClose() {
    setFields(defaultFields)
    closeForm()
  }

  const formTemplate = (
    <form
      id={id}
      className={`form ${requestState === "loading" ? "is-loading" : ""}`}
    >
      <div className="form--header">
        <h3 className="form--title">{data.title}</h3>
        <p className="form--description">{data.description}</p>
      </div>
      <div className="form--body">
        <div className="form--columns columns">
          <div className="column">
            <Field
              id="name"
              label="Nome"
              placeholder="Mario"
              value={fields.name}
              onChange={e => updateField(e)}
            />
          </div>
          <div className="column">
            <Field
              id="surname"
              label="Cognome"
              placeholder="Rossi"
              value={fields.surname}
              onChange={e => updateField(e)}
            />
          </div>
        </div>
        <Field
          id="email"
          label="Indirizzo email"
          value={fields.email}
          placeholder="mario.rossi@example.com"
          onChange={e => updateField(e)}
        />
        <Field
          id="company"
          label="Azienda per cui lavori"
          info="(opzionale)"
          value={fields.company}
          placeholder="Nome dell'azienda"
          onChange={e => updateField(e)}
        />
        <Field
          id="role"
          label="Il tuo ruolo professionale"
          value={fields.role}
          placeholder="Responsabile marketing"
          onChange={e => updateField(e)}
        />
        <Field
          id="skill"
          label="Indica le competenze aggiuntive che vuoi esplorare"
          info="Inserisci una o più parole chiave che la descrivono"
          value={fields.skill}
          placeholder="Contenuti social media"
          onChange={e => updateField(e)}
        />
      </div>
      <div className="form--footer">
        <div className="form--actions">
          <Button
            style="service"
            text="annulla"
            action="modal"
            size="small"
            fireAction={e => handleClose(e)}
          />

          <Button
            style="primary"
            text="Invia"
            action="event"
            fireAction={e => handleSubmit(e)}
            disabled={!validForm}
          />
        </div>
        {requestState === "error" && (
          <p className="form--error">
            <small>
              Qualcosa non è andato a buon fine
              <br />
              se il problema persiste contattaci alla email{" "}
              <a href="mailto:info@viblio.com">info@viblio.com</a>
            </small>
          </p>
        )}
      </div>
    </form>
  )

  const successTemplate = (
    <div className="success">
      <div className="success--header">
        <h3 className="success--title">
          Grazie, <span className="success--name">{fields.name}</span> !
        </h3>
        <p className="success--description">
          Il tuo indirizzo email {fields.email} è stato aggiunto ai nostri
          contatti, verrai ricontattato quanto prima dal nostro staff.
        </p>
      </div>
      <div className="success--footer">
        <div className="success--actions">
          <Button
            style="primary"
            text="Chiudi"
            action="modal"
            fireAction={e => handleClose(e)}
          />
        </div>
      </div>
    </div>
  )
  // console.log(resultForm)
  return requestState === "success" ? successTemplate : formTemplate
}
