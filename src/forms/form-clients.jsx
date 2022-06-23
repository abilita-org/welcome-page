import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import Field from "../components/field"
import Button from "../components/button"
import Checkbox from "../components/checkbox"

const data = {
  default: {
    title: "Mettiti in contatto",
    description: "Entra a far parte del network di Viblio",
  },
  business: {
    title: "Dai una svolta alla tua azienda",
    description: "Entra in contatto con i miei learning experts",
  },
  consumer: {
    title: "Le persone come te fanno la differenza",
    description: "Entra nella community di Viblio",
  },
  errors: {
    invalidEmail: "L'indirizzo email non è valido.",
    subscribed: "L'indirizzo email indicato è già registrato.",
    default: "Si è verificato un errore.",
  },
}

const defaultFields = {
  name: "",
  surname: "",
  email: "",
  company: "",
  role: "",
  skill: "",
  acceptance: false,
}

export default function FormClients({ id, target, closeForm = () => null }) {
  const [targetForm] = useState(target)
  const [fields, setFields] = useState(defaultFields)
  const [validForm, setValidForm] = useState(false)
  const [resultForm, setResultForm] = useState({ result: "", msg: "" })

  function updateField({ target }) {
    const _fields = { ...fields }
    const id = target.id
    const value = target.value
    _fields[id] = value
    validateform(_fields)
    setFields(_fields)
  }

  function validateform(_field) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validEmail = re.test(String(_field.email).toLowerCase())
    const validAcceptance = !!_field.acceptance
    const validName = !!_field.name.length
    const validSurname = !!_field.surname.length

    const validIdentity =
      validEmail && validName && validSurname && validAcceptance
    if (target === "business") {
      const validCompany = !!_field.company.length
      setValidForm(validIdentity && validCompany)
    } else {
      const validRole = !!_field.role.length
      setValidForm(validIdentity && validRole)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const mailChimpFields = {
      FNAME: fields.name,
      LNAME: fields.surname,
    }
    if (targetForm === "business") {
      mailChimpFields.COMPANY = fields.company
    }
    if (targetForm === "consumer") {
      mailChimpFields.ROLE = fields.role
      mailChimpFields.SKILL = fields.skill
    }
    const result = await addToMailchimp(fields.email, mailChimpFields)
    setResultForm(result)
  }

  function recognizeErrors(error) {
    if (error.includes("subscribed")) {
      return data.errors.subscribed
    } else if (error.includes("fake or invalid")) {
      return data.errors.invalidEmail
    } else {
      return data.errors.default
    }
  }

  function handleClose() {
    closeForm()
  }

  const formTemplate = resultForm => (
    <form id={id} className="form">
      <div className="form--header">
        <h3 className="form--title">
          {data[!!targetForm ? targetForm : "default"].title}
        </h3>
        <p className="form--description">
          {data[!!targetForm ? targetForm : "default"].description}
        </p>
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
        {target === "consumer" && (
          <>
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
          </>
        )}
        {target === "business" && (
          <Field
            id="company"
            label="Azienda"
            value={fields.company}
            placeholder="ferrero"
            onChange={e => updateField(e)}
          />
        )}
      </div>
      <div className="form--footer">
        <Checkbox
          id="acceptance"
          link="/privacy"
          onChange={e => updateField(e)}
        />
        <div className="form--actions">
          <Button
            style="service"
            text="annulla"
            action="modal"
            size="small"
            fireAction={e => handleClose(e)}
          />
          {resultForm.result === "error" && (
            <p className="form--error">
              <small>{recognizeErrors(resultForm.msg)}</small>
            </p>
          )}
          <Button
            style="primary"
            text="Invia"
            action="event"
            fireAction={e => handleSubmit(e)}
            disabled={!validForm}
          />
        </div>
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
  return resultForm.result === "success"
    ? successTemplate
    : formTemplate(resultForm)
}
