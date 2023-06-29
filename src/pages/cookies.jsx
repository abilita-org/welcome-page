import { graphql } from 'gatsby'
import React from "react"
import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import {Trans} from 'gatsby-plugin-react-i18next';

import "../styles/style.scss"

/**
 * 
 * @returns 
 * 



 */

const CookiePolicy = () => (
    <>
      <Seo />
      <Header />
      <main className="page">
        <div className="page--container container">
          <h1 className="text-heading"><Trans>cookie</Trans></h1>
          <p><Trans>cookie-description</Trans></p>
          <br />
          <h2 className="text-notehead"><Trans>cookie-question</Trans></h2>
          <p>

          <Trans>cookie-answer</Trans>
          </p>
          <div className="page--contents">
            <section className="page--content">
              <h2 className="text-notehead">
              <Trans>cookie-question-1</Trans>
              </h2>
              <p>
              <Trans>cookie-answer-1</Trans>
                <ul>
                  <li><Trans>cookie-answer-1-2</Trans></li>
                  <li><Trans>cookie-answer-1-3</Trans> </li>
                  <li><Trans>cookie-answer-1-4</Trans></li>
                </ul>

                <Trans>cookie-answer-1-5</Trans>

                <ul>
                  <li><Trans>cookie-answer-1-6</Trans></li>
                  <li><Trans>cookie-answer-1-7</Trans></li>
                  <li><Trans>cookie-answer-1-8</Trans></li>
                </ul>
                <Trans>cookie-answer-1-9</Trans>
                <ul>
                  <li><a>www.youronlinechoices.com</a></li>
                  <li><a>http://www.allaboutcookies.org</a></li>
                  <li><a>https://www.garanteprivacy.it/temi/cookie;</a></li>
                </ul>

                L’elenco completo dei cookies presenti sul sito web <a>apprendo.ai</a> è inserito nella tabella riportata in calce alla presente informativa.
              </p>

            </section>
            <section className="page--content">
              <h2 className="text-notehead">
                3. Come modificare le impostazioni relative ai cookie?
              </h2>
              Il nostro sito web può utilizzare cookies tecnici, statistici e di marketing e profilazione.
              L’utente può scegliere se cancellare, o bloccare, taluni (o tutti) i cookie attraverso l’apposito banner presente sul sito o tramite la configurazione del proprio browser. La procedura di configurazione dei cookies è diversa per ciascun browser, di seguito riportiamo il link alle istruzioni dei browser più diffusi:

              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop">Mozilla Firefox</a></li>
                <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies">Opera</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/informazioni-sulla-prevenzione-del-monitoraggio-in-microsoft-edge-5ac125e8-9b90-8d59-fa2c-7f2e9a44d869">Microsoft Edge</a></li>
                <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d#:~:text=In%20Internet%20Explorer%20selezionare%20il,proprietari%20o%20di%20terze%20parti.">Microsoft Explorer</a></li>
                <li><a href="https://support.apple.com/it-it/HT201265">Apple Safari</a></li>
              </ul>

              Ricordiamo inoltre, che disabilitando completamente i cookie nel browser, l’utente potrebbe non essere in grado di utilizzare tutte le funzionalità interattive.
            </section>
            <section className="page--content">
              <h2 className="text-notehead">
                4. Quali cookie utilizziamo nel nostro sito?
              </h2>
              <h3 className="text-notehead">
                Cookie tecnici
              </h3>
              <p>
                I cookie tecnici sono quelli che il Titolare utilizza al solo fine di consentire all'utente la normale navigazione e fruizione del sito web e una migliore esperienza del servizio offerto. Possono essere suddivisi in cookie di navigazione (garantiscono la normale navigazione e fruizione del Sito) e cookie funzionali (permettono all'utente la navigazione in funzione di una serie di criteri selezionati come la lingua o il paese di provenienza) al fine di migliorare il servizio reso sul Sito. Sul presente sito vengono utilizzati cookie tecnici per memorizzare la decisione dell’Utente sull’utilizzo dei cookie sul sito web.
              </p>
              <table>
                <thead>
                  <tr>
                    <th width="20%">NOME COOKIE</th>
                    <th width="20%">FORNITORE</th>
                    <th width="40%">FUNZIONE</th>
                    <th width="20%">SCADENZA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>KEYCLOAK_3P_COOKIE_SAMESITE</th>
                    <th>Auth.viblio.com</th>
                    <th>Utilizzato per la funzione di accesso al sito web.</th>
                    <th>1 giorno</th>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-notehead">
                Cookie statistici
              </h3>
              <p>
                Questi cookie vengono installati da soggetti terzi rispetto al titolare del trattamento. I cookie (ad es. Google Analitycs) vengono utilizzati per raccogliere informazioni, in forma aggregata o non aggregata, relative al numero di utenti e su come venga utilizzato il sito web (numero di pagine visitate, pagine accedute, ecc.) al fine di elaborare analisi statistiche sulle modalità di navigazione degli utenti.
              </p>
              <table>
                <thead>
                  <tr>
                    <th width="20%">NOME COOKIE</th>
                    <th width="20%">FORNITORE</th>
                    <th width="40%">FUNZIONE</th>
                    <th width="20%">SCADENZA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>ugid</th>
                    <th>Unsplash.com</th>
                    <th>Utilizzato per l’implementazione di contenuti video sul sito web.</th>
                    <th>1 anno</th>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-notehead">
                Cookie di terze parti
              </h3>
              <p>
                Questi cookie vengono installati da soggetti terzi rispetto al titolare del trattamento per tracciare l’attività dell’utente nel sito web e possono essere impostati solo dopo che quest’ultimo ha dato il suo consenso.
              </p>
              <table>
                <thead>
                  <tr>
                    <th width="20%">NOME COOKIE</th>
                    <th width="20%">FORNITORE</th>
                    <th width="20%">SCADENZA</th>
                    <th width="40%">FUNZIONE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>__insp_sid</th>
                    <th>Inspectlet</th>
                    <th>Sessione</th>
                    <th rowSpan="6">Utilizzati per analizzare il comportamento dell’utente e per raccogliere informazioni al fine di migliorare l’esperienza dell’utente.</th>
                  </tr>
                  <tr>
                    <th>__insp_ref</th>
                    <th>Inspectlet</th>
                    <th>Sessione</th>
                  </tr>
                  <tr>
                    <th>__insp_scpt</th>
                    <th>Inspectlet</th>
                    <th>Sessione</th>
                  </tr>
                  <tr>
                    <th>__insp_nv</th>
                    <th>Inspectlet</th>
                    <th>Sessione</th>
                  </tr>
                  <tr>
                    <th>__insp_wid</th>
                    <th>Inspectlet</th>
                    <th>Sessione</th>
                  </tr>
                  <tr>
                    <th>__insp_uid</th>
                    <th>Inspectlet</th>
                    <th>Sessione</th>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-notehead">
                Cookie non classificati
              </h3>
              <table>
                <thead>
                  <tr>
                    <th width="20%">NOME COOKIE</th>
                    <th width="20%">FORNITORE</th>
                    <th width="40%">FUNZIONE</th>
                    <th width="20%">SCADENZA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>loglevel:webpach-dev-server</th>
                    <th>apprendo.ai</th>
                    <th>Non classificato</th>
                    <th>Persistente</th>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="page--content">
              <h2 className="text-notehead">
                5. Modifiche o aggiornamenti alla presente cookie policy
              </h2>
              <p>
                Il titolare del trattamento si riserva il diritto di apportare modifiche alla presente cookie policy in qualunque momento dandone pubblicità agli Utenti su questa pagina. Si prega dunque di consultare frequentemente questa pagina, prendendo come riferimento la data dell’ultimo aggiornamento indicata qui di seguito.
              </p>
              <p><strong>Ultimo aggiornamento 22.09.2022</strong></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )

export default CookiePolicy

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

