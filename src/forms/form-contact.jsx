import React, { useState } from "react"
import Field from "../components/field"
import Select from "../components/select"
import TextArea from "../components/text_area"
import Checkbox from "../components/checkbox"
import Button from "../components/button"

const data = {
  form: {
    title: "Titolo della from",
    description: "Descrizione della form",
  },
  errors: {
    invalidEmail: "L'indirizzo email non è valido.",
    default: "Si è verificato un errore.",
  },
  reasons: [
    { text: "Richiesta di informazioni", value: "info" },
    { text: "Pianificare una demo", value: "demo" },
    { text: "Segnalare un malfunzionamento", value: "bug" },
    { text: "Altro, indicato nel messaggio", value: "other" },
  ],
}

const defaultFields = {
  name: "",
  surname: "",
  email: "",
  reason: "info",
  message: "",
  acceptance: false,
}

const formName = "viblio-contact-form"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function FormContact({ id }) {
  const [isSent, setIsSent] = useState(false)
  const [fields, setFields] = useState(defaultFields)
  const [validForm, setValidForm] = useState(false)
  const [error, setError] = useState(null)

  function updateField({ target }) {
    const _fields = { ...fields }
    const id = target.id
    const value = target.value
    _fields[id] = value
    validateform(_fields)
    setFields(_fields)
  }

  function validateform(_field) {
    let validEmail, validMessage, validAcceptance, validName, validSurname
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    validEmail = re.test(String(_field.email).toLowerCase())
    validName = !!_field.name.length
    validSurname = !!_field.surname.length
    validMessage = _field.message.length
    const validInputs = validEmail && validName && validSurname && validMessage

    validAcceptance = !!_field.acceptance

    setValidForm(validInputs && validAcceptance)
  }

  function handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName, ...fields }),
    })
      .then(() => setIsSent(true))
      .catch(error => alert(error))

    event.preventDefault()
    debugger
  }

  function handleClose(event) {
    setFields(defaultFields)
    setIsSent(false)
  }

  const formTemplate = (
    <form id={id} name={formName} className="form" data-netlify="true">
      <input type="hidden" name="form-name" value={formName} />
      <div className="form--header">
        <h3 className="form--title">{data.form.title}</h3>
        <p className="form--description">{data.form.description}</p>
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
          value={fields.email}
          label="Indirizzo email"
          placeholder="mario.rossi@example.com"
          onChange={e => updateField(e)}
        />
        <Select
          id="reason"
          label="Ci stai contattando per"
          options={data.reasons}
          selected={fields.reason}
          onChange={e => updateField(e)}
        />
        <TextArea
          id="message"
          label="Specifica la tua richiesta"
          placheholder="Inizia qui il tuo messaggio"
          value={fields.message}
          rows={5}
          onChange={e => updateField(e)}
        />
      </div>
      <div className="form--footer">
        <Checkbox
          id="acceptance"
          link="/privacy"
          onChange={e => updateField(e)}
        />
        <div className="form--actions">
          <Button
            style="primary"
            text="Invia"
            action="submit"
            disabled={!validForm}
            fireAction={e => handleSubmit(e)}
          />
        </div>
      </div>
    </form>
  )

  const successTemplate = (
    <div className="success">
      <div className="success--header">
        <h3 className="success--title">Messaggio inviato con successo</h3>
        <p className="success--description">
          Grazie{" "}
          <strong>
            {fields.name} {fields.surname}
          </strong>
          ,
          <br />
          abbiamo inviato la tua richiesta è stata inviata al nostro servizio
          assistenza
          <br />
          verrai ricontattato quanto prima all'indirizzo
          <strong> {fields.email}</strong>.
        </p>
      </div>
      <div className="success--footer">
        <div className="success--actions">
          <Button
            style="primary"
            text="Continua la navigazione"
            action="submit"
            fireAction={e => handleClose(e)}
          />
        </div>
      </div>
    </div>
  )
  return isSent ? successTemplate : formTemplate
}
