import React from "react"

import brain from "../images/brain-connected.svg"
import face from "../images/face-detected.svg"
import book from "../images/book-opened.svg"
import run from "../images/mountain-run.svg"

import Seo from "../components/seo"
import Header from "../components/header"
import Divider from "../components/divider"
import Footer from "../components/footer"
import SectionCoverBusiness from "../components/section_cover_business"
import SectionJobRoleBusiness from "../components/section_jobrole_business"
import SectionFeature from "../components/section_feature"
import SectionPartner from "../components/section_partner"
import SectionClients from "../components/section_clients"

import "../styles/style.scss"

const data = {
  feartures: [
    {
      title:
        "BUSINESS dimmi il lavoro che fai: ti mostrerò quello che c’è da imparare per stare al passo dei migliori",
      description:
        "Il mio database è in continuo aggiornamento e raccoglie le competenze chiave per più di 3000 ruoli: scegli quello che più ti si adatta e io selezionerò per te i migliori corsi e i migliori contenuti di apprendimento disponibili online.",
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
        "Podcast, video, interi corsi e molto altro: cerca nella mia rete di contenuti e filtra i risultati per tipo, modalità e impegno necessario che preferisci.",
      image: { src: book, alt: "book opened" },
    },
    {
      title:
        "crea un percorso e segui i tuoi progressi: tutto in un unico posto",
      description:
        "Nella tua pagina personale potrai creare delle collezioni con i tuoi contenuti preferiti e monitorare il tuo percorso di apprendimento.",
      image: { src: run, alt: "run between mountains" },
    },
  ],
}

export default function index() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <SectionCoverBusiness />
        <Divider />
        <SectionJobRoleBusiness />
        <div id="features">
          {data.feartures.map((feature, i) => (
            <SectionFeature
              key={i}
              data={feature}
              id={i + 1}
              inverse={(i + 1) % 2 == 0}
            />
          ))}
        </div>
        <SectionPartner />
        <SectionClients />
      </main>
      <Footer />
    </>
  )
}
