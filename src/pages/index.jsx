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
import SectionClientBusiness from "../components/section_clients_business"
import SectionFoundationBusiness from "../components/section_foundation_business"

const data = {
  feartures: [
    {
      title:
        "Job role Intelligence",
      description:
        "Viblio ti permette di conoscere come evolvono i ruoli, quali competenze sono richieste per stare al passo, quali tecnologie impatteranno su di essi.&nbsp;Tra le \"hot skill\" specifiche di ruolo proposte da Viblio, la persona sceglie quelle che desidera sviluppare o approfondire (almeno 3 skill) per tracciare la rotta.Contestualmente, l'azienda ne può suggerire quelle che ritiene in linea con i suoi fabbisogni (piani di sviluppo o performance management)",
      image: { src: brain, alt: "brain connected" },
    },
    {
      title:
        "I suggerimenti personalizzati",
      description:
        ".La nostra intelligenza artificiale seleziona i contenuti più rilevanti, per quel ruolo e ogni singola skill selezionata, cercandoli nel nostro database di corsi, articoli, podcast, video, ted talk, etc.più le persone utilizzano Viblio e più suggerimenti personalizzati Viblio sarà in grado di creare.Non solo corsi, non solo un unico provider! Aggreghiamo contenuti da una molteplicità di fonti (scopri l'universo di contenuti in continuo aggiornamento, dal quale attingiamo, clicca qui)",
      image: { src: face, alt: "face detection" },
    },
    {
      title: "Le collezioni personali ed editoriali",
      description:
        "Viblio aiuta le persone ad organizzare il lavoro, attraverso comode collezioni personali per fruire dei contenuti proposti nel momento più facile e adeguato. E consente ai manager della tua azienda di creare utili collezioni di contenuti da condividere con i loro team.Oltre ai contenuti selezionati e curati da Viblio, le tue persone potranno utilizzare il nostro power metasearch per scoprire ogni giorni nuovi spunti di apprendimento, anche da collezioni preparati da esperti sulle tematiche più cercate dai vostri dipendenti.&nbsp;Non solo, Viblio arrichisce l'esperienza delle tue persone costantemente.Dagli argomenti più popolari, alla selezione degli esperti, le persone ricevono spinte gentili per stimolare il loro apprendimento.",
      image: { src: book, alt: "book opened" },
    }
  ],
}

const divider_text = [{
  text1: "Anticipa l'obsolescenza delle competenze di tutta la tua forza lavoro",
  text2: "Trasforma l'auto-formazione in un asset strategico",
  text3: "Stimola il self-empowerment e l'employability"
},
{
  text1: "Contenuti e piattaforma anche in italiano",
  text2: "Integrabile con il tuo LMS",
  text3: "Contenuti suggeriti dall'Intelligenza Artificiale"
}]

export default function index() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <SectionCoverBusiness />
        <Divider
          id={1}
          data={divider_text[0]}
        />
        <SectionJobRoleBusiness />
        <Divider
          id={2}
          data={divider_text[1]}
        />
        <SectionClientBusiness />
        <SectionFoundationBusiness />
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
