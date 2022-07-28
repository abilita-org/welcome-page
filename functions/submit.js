require("dotenv").config({
  path: `.env`,
})

const handler = async event => {
  const url = "https://viblio.zendesk.com/api/v2/tickets.json"
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
    },
    body: event.body,
  }
  try {
    const newTicket = fetch(url, options)
      .then(response => response.json())
      .then(data => data)
    return {
      statusCode: 200,
      body: JSON.stringify(newTicket),
    }
  } catch (error) {
    return {
      statusCode: 422,
      body: String.error,
    }
  }
}

module.exports = { handler }
