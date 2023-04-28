import React from "react"
//import FormContact from "../forms/form-contact"
import Question from "./question"
//import logo from "../images/logo-viblio.svg"
//import dart from "../images/dart-down.svg"

export default function SectionFaqBusiness() {
  const faq = [{
    question: "Da quali fornitori vengono selezionati e curati i contenuti?",
    answer:
      "Ad oggi Viblio conta con più di 36.000 contenuti di apprendimento provenienti dai più prestigiose content creators internazionali ed è in continua evoluzione:  Harvard Business Review Podcast, Ted, Coursera, Udacity, Udemy, Edx, Future Learn, Youtube Edu Channels, la pertinenza viene garantita da una potente AI semantica che ne verifica la congruenza del contenuto selezionato con le competenze del ruolo specifico."
  },
  {
    question: "Come faccio a far accedere i miei team a Viblio Business?",
    answer:
      "Prenota una demo e un nostro Expert ti spiegherà come Viblio può essere personalizzato su misura per la tua Azienda per aiutare il tuo Capitale Umano a crescere e svilupparsi Potrai avere un periodo di prova gratuito di 15 giorni, al termine dei quali confrontarti con noi per mettere a fuoco la soluzione ideale per te."
  },
  {
    question: "Come funziona se abbiamo un LMS già configurato?",
    answer:
      "Siamo in grado di integrarci con le LMS dei nostri clienti attraverso API con progetti specifici, un nostro Expert ti potrà spiegare nel dettaglio come possiamo integrare Viblio nella tua LMS."
  },
  {
    question: "Quanto costa Viblio Business?",
    answer:
      "(Collegamento con pagina pagamenti)"
  },
  {
    question: "Come posso assicurarmi che i miei team seguano effettivamente i loro percorsi di apprendimento personalizzati?",
    answer:
      "Viblio ti fornirà metriche di dettaglio e ti accompagnerà con learning expert dedicati per monitorare e accompagnarti nella gestione dell'ingaggio delle tue persone."
  }]
  return (
    <section id="faq" className="faq">
      <h1 className="titolo">Domande Frequenti</h1>
      <div className="cover--container container columns">
        <div className="column cover-business--content">
        {faq.map((q, i) => (
            <Question
              question={q.question}
              answer={q.answer}
              id={i + 1}
            />
          ))}
        </div>
        <div className="column cover-business--content">
          IMMAGINE
        </div>
      </div>
    </section>
  )
}
