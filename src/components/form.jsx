import React, { useState, useEffect } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import Field from "./field"
import Button from "./button"

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
    title: "I pionieri come te fanno la differenza",
    description: "Entra nella community dei beta tester",
  },
}

const defaultFields = {
  name: "",
  surname: "",
  email: "",
  company: "",
}

export default function Form({ target, closeForm = () => null }) {
  const [targetForm] = useState(target)
  const [fields, setFields] = useState(defaultFields)
  const [validForm, setValidForm] = useState(false)
  const [resultForm, setResultForm] = useState({ result: "", msg: "" })

  function updateField(event) {
    const _fields = { ...fields }
    const { value, id } = event.target
    _fields[id] = value
    validateform(_fields)
    setFields(_fields)
  }

  function validateform(_field) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validEmail = re.test(String(_field.email).toLowerCase())
    const validName = !!_field.name.length
    const validSurname = !!_field.surname.length

    const validIdentity = validEmail && validName && validSurname
    if (target === "business") {
      const validCompany = !!_field.company.length
      setValidForm(validIdentity && validCompany)
    } else {
      setValidForm(validIdentity)
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
    const result = await addToMailchimp(fields.email, mailChimpFields)
    setResultForm(result)
    console.log(result)
  }

  function handleClose() {
    closeForm()
  }

  const formTemplate = (
    <form>
      <div className="form--header">
        <h3 className="form--title">
          {data[!!targetForm ? targetForm : "default"].title}
        </h3>
        <p className="form--description">
          {data[!!targetForm ? targetForm : "default"].description}
        </p>
      </div>

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
      {target === "business" && (
        <Field
          id="company"
          label="Azienda"
          value={fields.company}
          placeholder="ferrero"
          onChange={e => updateField(e)}
        />
      )}
      <div className="form--footer">
        {!!resultForm.result === "error" && <small>{resultForm.msg}</small>}
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
            action="submit"
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

  console.log(resultForm)
  return resultForm.result === "success" ? successTemplate : formTemplate
}
