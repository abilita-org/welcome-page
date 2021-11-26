require("dotenv").config({
  path: `.env`,
})

const sendGridMail = require("@sendgrid/mail")

const handler = async event => {
  try {
    const { name, surname, email, reason, message } = JSON.parse(event.body)
      .payload.data
    const fullName = `${name} ${surname}`
    const senderEmail = process.env.SENDER_EMAIL

    // Set email variables
    const contact = {}
    switch (reason) {
      case "info":
        contact.subject = "Richiesta di informazioni"
        contact.message = "per ricevere le informazioni richieste"
        break
      case "demo":
        contact.subject = "Pianificazione demo"
        contact.message = "per organizzare una demo illustrativa"
        break
      case "bug":
        contact.subject = "Segnalazione di un malfunzionamento"
        contact.message =
          "per risolvere l'eventuale problema e darle supporto per procedere nell'utilizzo del nostro servizio"
      default:
        contact.subject = "Richiesta di contatto"
        contact.message = "dal nostro team"
        break
    }

    // Configure client email
    const clientTemplate = `
      <div>
        Salve <strong>${fullName}</strong>,<br>
        abbiamo ricevuto la sua ${
          reason === "bug" ? "segnalazione" : "richiesta"
        }.<br><br>
        Verrà ricontattato il prima possibile ${contact.message}.<br><br>
        Nel ringraziarla per il suo interesse,<br>
        le porgiamo cordiali saluti.<br><br>
        Lo staff di <strong>Viblio</strong>
      </div>
    `
    const mailToClient = {
      from: senderEmail,
      to: email,
      subject: `Viblio Supporto - ${contact.subject}`,
      html: clientTemplate,
    }
    // console.log(mailToClient)

    // Configure support mail
    const supportTemplate = `
      <div>
        ${contact.subject} da parte di <strong>${fullName}</strong>.<br><br>
        Indirizzo: <strong>${email}</strong><br><br>
        Messaggio:<br>
        <strong>${message}</strong>
      </div>
    `
    const mailToSupport = {
      from: senderEmail,
      to: senderEmail,
      subject: `Richiesta supporto - ${reason} - ${fullName}`,
      html: supportTemplate,
    }
    // console.log(mailToSupport)

    // Send email
    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

    await sendGridMail.send(mailToClient)
    await sendGridMail.send(mailToSupport)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    }
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}

module.exports = { handler }
