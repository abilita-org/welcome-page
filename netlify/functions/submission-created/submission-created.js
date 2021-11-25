require("dotenv").config({
  path: `.env`,
})

const sendGridMail = require("@sendgrid/mail")

const handler = async event => {
  try {
    const { name, surname, email, reason, message } = JSON.parse(event.body)
      .payload.data

    console.log(
      `name: ${name}, surname: ${surname}, email: ${email}, reason: ${reason}, message: ${message}`
    )

    let subject, htmlMessage
    switch (reason) {
      case "info":
        subject = "Richiesta di informazioni"
        htmlMessage = "per ricevere le informazioni richieste"
        break
      case "demo":
        subject = "Pianificazione demo"
        htmlMessage = "per organizzare una demo illustrativa"
        break
      case "bug":
        subject = "Segnalazione di un malfunzionamento"
        htmlMessage =
          "per risolvere l'eventuale problema e darle supporto per procedere nell'utilizzo del nostro servizio"
      default:
        subject = "Richiesta di contatto"
        htmlMessage = "dal nostro team"
        break
    }

    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)
    const html = `
      <div> 
        Salve <strong>${name} ${surname}</strong>,
        <br>
        abbiamo ricevuto la sua ${
          reason === "bug" ? "segnalazione" : "richiesta"
        }.
        <br><br>
        Verrà ricontattato il prima possibile ${htmlMessage}.
        <br><br>
        Nel ringraziarla per il suo interesse,
        <br>
        le porgiamo cordiali saluti.
        <br><br>
        Lo staff di <strong>Viblio</strong>
      </div>
    `

    const mail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: `Viblio Supporto - ${subject}`,
      html,
    }
    await sendGridMail.send(mail)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    }
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}

module.exports = { handler }
