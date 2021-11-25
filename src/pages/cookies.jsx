import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/style.scss"

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="page">
        <div className="page--container container">
          <h1 className="text-heading">Cookie policy</h1>
          <h2 className="text-notehead">Il Titolare del trattamento</h2>
          <p>
            Apprendo S.r.l. con sede in Udine, via Marinoni n. 12. Il Titolare
            può essere contattato all’indirizzo email{" "}
            <strong>support@apprendo.ai</strong>
          </p>
          <div className="page--contents">
            <section className="page--content">
              <h3 className="text-notehead">
                Cookie e tecnologie analoghe – cosa sono
              </h3>
              <p>
                Un cookie è un piccolo file che viene posizionato nel
                dispositivo dell’utente (PC/smartphone/tablet) quando accede al
                nostro sito internet. Alcuni cookie (cookie tecnici) sono
                necessari ad attivare i servizi e le funzionalità del sito, o
                permettono di ricordare le preferenze e recuperare informazioni
                aggregate sull’uso del sito, con il fine di migliorare il
                servizio offerto. Altre tipologie di cookie e tecnologie
                analoghe possono essere invece usate per tracciare la
                navigazione degli utenti e profilare interessi e abitudini, per
                visualizzare annunci pubblicitari mirati.
              </p>
              <p>
                Per l’installazione dei cookie tecnici non è richiesto il
                consenso degli utenti, mentre i cookies di tracciamento e di
                profilazione, invece, possono essere installati sul dispositivo
                solo con il consenso dell’utente.
              </p>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">
                Che cookie usiamo sul nostro sito
              </h3>
              <p>
                Utilizziamo due tipi di cookie: cookie persistenti e cookie di
                sessione. I cookie persistenti permangono oltre la sessione in
                corso e vengono utilizzati per molti scopi, come per riconoscere
                gli utente già esistenti al loro ritorno sul sito. I cookie di
                sessione invece durano solo fino alla durata della visita del
                sito o della sessione del browser.
              </p>
              <p>
                Di seguito elenchiamo i cookies che sono utilizzati nella nostra
                pagina web, la tipologia e la funzione:
              </p>
              <table>
                <thead>
                  <tr>
                    <th width="30%">Tipologia</th>
                    <th width="70%">Descrizione</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th width="30%">Cookie tecnici</th>
                    <th width="70%">
                      <p>
                        I cookie tecnici installati sul dispositivo ci servono
                        per riconoscere gli utenti iscritti ai servizi sul sito
                        web e per rendere possibili le funzionalità del nostro
                        sito.
                      </p>
                    </th>
                  </tr>
                  <tr>
                    <th width="30%">Google Analytics con IP anonimizzato</th>
                    <th width="70%">
                      <p>
                        Analisi e ricerca. Questi cookie ci aiutano a conoscere
                        le prestazioni del nostro sito e ci aiutano a migliorare
                        i servizi offerti e l’esperienza utente. Tutti i dati
                        sono aggregati e puramente statistici, e non è possibile
                        risalire all’identità degli utenti che navigano sul
                        sito.
                      </p>
                    </th>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">Impostazioni cookie</h3>
              <p>
                L’utente può cambiare le proprie preferenze attraverso il banner
                cookie presente sul sito. È anche possibile bloccare
                l’installazione dei cookie, o cancellarli, attraverso la
                configurazione delle opzioni sul browser utilizzato.
              </p>
              <p>
                L’utente può permettere, bloccare o eliminare i cookies
                installati nel suo dispositivo attraverso la configurazione
                delle opzioni del suo browser. Di seguito elenchiamo i link di
                alcuni dei browser più conosciuti:
              </p>
              <ul className="list-none">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647?hl=it">
                    Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie">
                    Firefox
                  </a>
                </li>
                <li>
                  <a href="http://help.opera.com/Windows/10.00/it/cookies.html">
                    Opera
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/it-it/HT201265">Safari</a>
                </li>
                <li>
                  <a href="https://support.brave.com/hc/en-us/articles/360050634931-How-Do-I-Manage-Cookies-In-Brave-">
                    Brave
                  </a>
                </li>
              </ul>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">Altre informazioni utili</h3>
              <p>
                Per ulteriori informazioni sul trattamento di dati personali,
                consulta la nostra <a href="/privacy">privacy policy</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
