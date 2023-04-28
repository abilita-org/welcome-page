import React,{useState} from "react"

import brain from "../images/brain-connected.svg"
import face from "../images/face-detected.svg"
import book from "../images/book-opened.svg"

import Seo from "../components/seo"
import Header from "../components/header"
import Divider from "../components/divider"
import Footer from "../components/footer"
import SectionCoverBusiness from "../components/section_cover_business"
import SectionJobRoleBusiness from "../components/section_jobrole_business"
import SectionFeature from "../components/section_feature"

import "../styles/style.scss"
import SectionClientBusiness from "../components/section_clients_business"
import SectionFoundationBusiness from "../components/section_foundation_business"
import Button from "../components/button"
import SectionFaqBusiness from "../components/section_faq_business"
import Scheduler from "../components/scheduling"

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
        "La nostra intelligenza artificiale seleziona i contenuti più rilevanti, per quel ruolo e ogni singola skill selezionata, cercandoli nel nostro database di corsi, articoli, podcast, video, ted talk, etc.più le persone utilizzano Viblio e più suggerimenti personalizzati Viblio sarà in grado di creare.Non solo corsi, non solo un unico provider! Aggreghiamo contenuti da una molteplicità di fonti (scopri l'universo di contenuti in continuo aggiornamento, dal quale attingiamo, <a href=\"https://business.viblio.com/partners/\" target=\"_blank\">clicca qui</a>",
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

const data2 = {
  feartures: [
    {
      title:
        "Data Analysis",
      description:
        "Se anche tu credi nei dati per migliorare, a breve potrai usufruire di 2 strumenti per facilitare l'esperienza tua e delle tue persone e aiutarti a prendere decisioni di sviluppo basandoti su dati di reale utilizzo ed interesse.Resta in ascolto del fabbisogno formativo delle tue persone con la nostra Learning Intelligence Dashboard, un potente tool di data analysis che ti mostra dove stanno navigando le tue persone e quali interessi hanno generato, per intervenire prontamente suggerendo nuove direzioni, condividendo scoperte, tesori nascosti.Il Diario di bordo è il corrispondente strumento per i naviganti. Ognuna delle tue persone potrà tenere così tracciati i suoi progressi, le sue esplorazioni, e ricevere insight sul lavoro che sta facendo con semplici e immediati strumenti visuali.",
      image: { src: brain, alt: "brain connected" },
    },
    {
      title:
        "Budget",
      description:
        "Ricompensa le tue persone con il dono dell'apprendimento.Offri l'apprendimento oltre ai soliti benefit in modo semplice e veloce grazie all'integrazione con Soldo.comAssegna alle tue persone un budget per l'apprendimento: mensile, trimestrale o annuale e consenti loro di gestire il proprio apprendimento continuo.Specifica le competenze che i membri del tuo team devono sviluppare per i loro ruoli e ti aiuteremo a far emergere contenuti pertinenti.",
      image: { src: face, alt: "face detection" },
    },
    {
      title: "Gruppi di studio e social learning",
      description:
        "L'abbiamo sperimentato tutti: dedicare tempo all'auto-formazione dopo una lunga giornata di lavoro, cercando l'incastro giusto tra i mille impegni, è una sfida difficilissima.Ma c'è una buona notizia!I nostri test e una solida letteratura scientifica, provano che studiare insieme agli altri riduce l'abbandono e incentiva le persone a portare a termine il percorso iniziato.Il tool Club Studio,&nbsp; per organizzare il proprio apprendimento insieme agli altri. Si sceglie un contenuto specifico, un corso, un podcast, un libro, una data di inizio e un numero di \"incontri\" per parlare di quanto appreso, magari invitando l'esperto aziendale di turno.Insieme ai gruppi di studio stiamo lavorando per rendere quanto più semplice condividere i propri percorsi di apprendimento con i colleghi, socializzare il proprio sapere, in modo informale e dinamico.",
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
  const [modal, setModal] = useState(false)
  const [target, setTarget] = useState("")

  function showModal(t) {
    setTarget(t)
    setModal(true)
  }
  function hideModal() {
    setTarget("")
    setModal(false)
  }
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
        <div class="center-button">
        <Button style="primary" text="Prenota una Demo" size="big" action="scheduler"/>
        </div>
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
        <div class="center-button">
        <Button style="primary" text="Prenota una Demo" size="large" action="scheduler"/>
        </div>
        <div class="center-button"><h1 className="titolo">COMING SOON</h1></div>
        <div id="features2">
          {data2.feartures.map((feature, i) => (
            <SectionFeature
              key={i}
              data={feature}
              id={i + 1}
              inverse={(i + 1) % 2 == 0}
            />
          ))}
        </div>
        <Button style="secondary" text="Inserisci la tua mail per ricevere notizie del lancio!" size="small" action="modal" target="contact" fireAction={e => showModal(e)} />
        <SectionFaqBusiness />
        <h1 className="titolo">PRENOTA UNA DEMO</h1>
        <Scheduler />
      </main>
      <Footer />
    </>
  )
}
