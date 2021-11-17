import React, { useRef, useEffect, useState } from "react"
import Button from "./button"
import Field from "./field"

const data = {
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

export default function Modal({ showModal, target, hideModal = () => null }) {
  const [fields, setFields] = useState(defaultFields)
  const [validForm, setValidForm] = useState(false)
  let ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      hideModal && hideModal()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  })

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

  async function handleSubmit() {
    debugger
    console.log(fields)

    await setFields(defaultFields)
    await setValidForm(false)
    hideModal()
  }

  return (
    <div className={`modal ${showModal ? "active" : ""}`}>
      <div ref={ref} className="modal--container">
        {!!target && (
          <div className="modal--header">
            <h3 className="modal--title">{data[target].title}</h3>
            <p className="modal--description">{data[target].description}</p>
          </div>
        )}
        <form>
          <div className="modal--columns columns">
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
          <div className="modal--footer">
            <Button
              style="service"
              text="annulla"
              action="modal"
              size="small"
              fireAction={() => hideModal()}
            />
            <Button
              style="primary"
              text="Invia"
              action="submit"
              fireAction={(e) => handleSubmit(e)}
              disabled={!validForm}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
