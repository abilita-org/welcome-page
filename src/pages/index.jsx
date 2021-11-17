import React from "react"

import brain from "../images/brain-connected.svg"
import face from "../images/face-detected.svg"
import book from "../images/book-opened.svg"
import run from "../images/mountain-run.svg"

import Header from "../components/header"
import Footer from "../components/footer"
import Cover from "../components/cover"
import Feature from "../components/feature"
import Partner from "../components/partner"
import Contacts from "../components/contacts"

import "../styles/style.scss"

const data = {
  feartures: [
    {
      title:
        "dimmi il lavoro che fai: ti mostrerò quello che c’è da imparare per stare al passo dei migliori",
      description:
        "Sono una guida per il tuo percorso di apprendimento nell’universo della conoscenza. Raccolgo e seleziono per te i contenuti delle migliori piattaforme digitali al mondo, rendendoti il protagonista della tua crescita.",
      image: { src: brain, alt: "brain connected" },
    },
    {
      title:
        "conosciamoci meglio, e potrò selezionare i contenuti più adatti a te",
      description:
        "Rispondi alle domande della mia videointervista: grazie a un algoritmo di intelligenza artificiale validato da un team di esperti qualificati ti suggerirò i contenuti più adatti alle tue caratteristiche.",
      image: { src: face, alt: "face detection" },
    },
    {
      title: "scegli quello che più ti piace in totale libertà",
      description:
        "Cerca nella mia rete di contenuti e filtra i risultati per tipo, modalità, e impegno necessario.",
      image: { src: book, alt: "book opened" },
    },
    {
      title:
        "crea un percorso e segui i tuoi progressi: tutto in un unico posto",
      description:
        "Nella tua pagina personale potrai creare delle collezioni con i tuoi contenuti preferiti, monitorare il tuo percorso di apprendimento e riprendere un corso esattamente da dove lo avevi lasciato.",
      image: { src: run, alt: "run between mountains" },
    },
  ],
}

export default function index() {
  return (
    <>
      <Header />
      <main>
        <Cover />
        <div id="features">
          {data.feartures.map((feature, i) => (
            <Feature
              key={i}
              data={feature}
              id={i + 1}
              inverse={(i + 1) % 2 == 0}
            />
          ))}
        </div>
        <Partner />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
