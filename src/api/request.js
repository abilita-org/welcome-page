const url = "https://viblio.zendesk.com/api/v2/requests.json"
const SendRequest = data => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ request: data }),
  })
    .then(response => {
      if (!response.ok) {
        return new Error("Network response was not OK")
      }
      return "success"
    })
    .catch(err => {
      console.error(err)
      return "error"
    })
}

export default SendRequest
