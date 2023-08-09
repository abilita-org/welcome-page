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

                <Trans>cookie-answer-1-10</Trans> <a>viblio.com</a> <Trans>cookie-answer-1-11</Trans>
              </p>

            </section>
            <section className="page--content">
              <h2 className="text-notehead">
              <Trans>cookie-question-2</Trans>
              </h2>
              <Trans>cookie-answer-2</Trans>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop">Mozilla Firefox</a></li>
                <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies">Opera</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/informazioni-sulla-prevenzione-del-monitoraggio-in-microsoft-edge-5ac125e8-9b90-8d59-fa2c-7f2e9a44d869">Microsoft Edge</a></li>
                <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d#:~:text=In%20Internet%20Explorer%20selezionare%20il,proprietari%20o%20di%20terze%20parti.">Microsoft Explorer</a></li>
                <li><a href="https://support.apple.com/it-it/HT201265">Apple Safari</a></li>
              </ul>

              <Trans>cookie-answer-2-2</Trans>
            </section>
            <section className="page--content">
              <h2 className="text-notehead">
              <Trans>cookie-question-3</Trans>
              </h2>
              <h3 className="text-notehead">
              <Trans>cookie-answer-3-title-1</Trans>
              </h3>
              <p>
              <Trans>cookie-answer-3</Trans>
              </p>
              <table>
                <thead>
                  <tr>
                    <th width="20%"><Trans>cookie-answer-3-th</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-1</Trans></th>
                    <th width="40%"><Trans>cookie-answer-3-th-2</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-3</Trans></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>KEYCLOAK_3P_COOKIE_SAMESITE</th>
                    <th>Auth.viblio.com</th>
                    <th><Trans>cookie-answer-3-tr-2</Trans></th>
                    <th><Trans>cookie-answer-3-tr-3</Trans></th>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-notehead">
              <Trans>cookie-answer-3-title-2</Trans>
              </h3>
              <p>
              <Trans>cookie-answer-3-2</Trans>
              </p>
              <table>
                <thead>
                  <tr>
                  <th width="20%"><Trans>cookie-answer-3-th</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-1</Trans></th>
                    <th width="40%"><Trans>cookie-answer-3-th-2</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-3</Trans></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>ugid</th>
                    <th>Unsplash.com</th>
                    <th><Trans>cookie-answer-3-2-tr-2</Trans></th>
                    <th><Trans>cookie-answer-3-2-tr-3</Trans></th>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-notehead">
              <Trans>cookie-answer-3-title-3</Trans>
              </h3>
              <p>
              <Trans>cookie-answer-3-3</Trans>
              </p>
              <table>
                <thead>
                  <tr>
                  <th width="20%"><Trans>cookie-answer-3-th</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-1</Trans></th>
                    <th width="40%"><Trans>cookie-answer-3-th-2</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-3</Trans></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>__insp_sid</th>
                    <th>Inspectlet</th>
                    <th><Trans>cookie-answer-3-3-tr-2</Trans></th>
                    <th rowSpan="6"><Trans>cookie-answer-3-3-tr-3</Trans></th>
                  </tr>
                  <tr>
                    <th>__insp_ref</th>
                    <th>Inspectlet</th>
                    <th><Trans>cookie-answer-3-3-tr-2</Trans></th>
                  </tr>
                  <tr>
                    <th>__insp_scpt</th>
                    <th>Inspectlet</th>
                    <th><Trans>cookie-answer-3-3-tr-2</Trans></th>
                  </tr>
                  <tr>
                    <th>__insp_nv</th>
                    <th>Inspectlet</th>
                    <th><Trans>cookie-answer-3-3-tr-2</Trans></th>
                  </tr>
                  <tr>
                    <th>__insp_wid</th>
                    <th>Inspectlet</th>
                    <th><Trans>cookie-answer-3-3-tr-2</Trans></th>
                  </tr>
                  <tr>
                    <th>__insp_uid</th>
                    <th>Inspectlet</th>
                    <th><Trans>cookie-answer-3-3-tr-2</Trans></th>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-notehead">
              <Trans>cookie-answer-3-title-4</Trans>
              </h3>
              <table>
                <thead>
                  <tr>
                  <th width="20%"><Trans>cookie-answer-3-th</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-1</Trans></th>
                    <th width="40%"><Trans>cookie-answer-3-th-2</Trans></th>
                    <th width="20%"><Trans>cookie-answer-3-th-3</Trans></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>loglevel:webpach-dev-server</th>
                    <th>apprendo.ai</th>
                    <th><Trans>cookie-answer-3-4-tr-2</Trans></th>
                    <th><Trans>cookie-answer-3-4-tr-3</Trans></th>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="page--content">
              <h2 className="text-notehead">
              <Trans>cookie-question-4</Trans>
              </h2>
              <p>
              <Trans>cookie-answer-4</Trans>
              </p>
              <p><strong><Trans>cookie-update</Trans></strong></p>
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

