import React, { useState } from "react"
import { useQueryParam, StringParam } from "use-query-params"
import SendRequest from "../api/request"
import Field from "../components/field"
import Select from "../components/select"
import TextArea from "../components/text_area"
import Button from "../components/button"

const types = ["question", "task", "incident", "problem"]

const data = {
  form: {
    title: "Mettiti in contatto con noi",
    description:
      "Se sei interessato alla nostra piattaforma, hai segnalazioni da farci o più semplicemente hai bisogno di assistenza, indica la tua richiesta e specifica a cosa sei interessato.",
  },
  reasons: [
    { text: "Richiesta di informazioni", value: types[0] },
    { text: "Pianificare una demo", value: types[1] },
    { text: "Segnalare un malfunzionamento", value: types[2] },
    { text: "Non capisco come funziona", value: types[3] },
  ],
}

const defaultFields = {
  name: "",
  surname: "",
  email: null,
  reason: null,
  title: "",
  message: "",
}

const formName = "viblio-contact-form"

export default function FormContact({ id, closeForm = () => null }) {
  const userEmail = useQueryParam("email", StringParam)

  if (defaultFields.email === null) {
    defaultFields.email = !!userEmail[0] ? userEmail[0] : ""
  }

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
        case "reason":
          return !types.includes(_fields.reason)
        default:
          return !_fields[field].length
      }
    }).length
    setRequestState(null)
    setValidForm(!fieldsErrors)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const data = {
      created_at: new Date(),
      requester: {
        name: [fields.name, fields.surname].join(" "),
        email: fields.email,
      },
      type: fields.reason,
      subject: fields.title,
      comment: { body: fields.message },
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
          placeholder="Seleziona una delle opzioni"
          selected={fields.reason}
          onChange={e => updateField(e)}
        />
        <Field
          id="title"
          label="Oggetto della richiesta"
          placeholder="Descrivi brevemente"
          value={fields.title}
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
            action="event"
            fireAction={() => handleClose()}
          />
        </div>
      </div>
    </div>
  )
  return requestState === "success" ? successTemplate : formTemplate
}
