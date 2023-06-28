import { graphql } from 'gatsby'
import React from "react"
import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import {Trans} from 'gatsby-plugin-react-i18next';

import "../styles/style.scss"

const PrivacyPolicy = () => (
    <>
      <Seo />
      <Header />
      <main className="page">
        <div className="page--container container">
          <h1 className="text-heading">Privacy policy</h1>
          <p className="text-light">
            <small>
            <Trans>privacy-header</Trans>
              <br />
              <Trans>privacy-header2</Trans>
              <br />
              <Trans>privacy-header3</Trans>
            </small>
          </p>
          <div className="page--contents">
            <section className="page--content">
              <p>
                <span className="text-big"><Trans>privacy-title</Trans></span>
                <br />
                <Trans>privacy-description</Trans>
                <br />
                <Trans>privacy-description1</Trans>
              </p>
            </section>
            <section className="page--content">
              <h2 className="text-notehead">
              <Trans>privacy-question</Trans>
              </h2>
              <p>
              <Trans>privacy-answer</Trans>
              </p>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">
              <Trans>privacy-question1</Trans>
              </h3>
              <p>
              <Trans>privacy-answer1</Trans>
              </p>
              <ul>
                <li>
                  <p>
                  <Trans>privacy-answer1-2</Trans>
                  </p>
                </li>
              </ul>
              <p>
              <Trans>privacy-answer1-3</Trans>
              </p>
              <ul>
                <li>
                  <p>
                  <Trans>privacy-answer1-4</Trans>
                  </p>
                </li>
                <li>
                  <p>
                  <Trans>privacy-answer1-5</Trans>
                  </p>
                </li>
                <li>
                  <p>
                  <Trans>privacy-answer1-6</Trans>
                  </p>
                </li>
              </ul>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">
              <Trans>privacy-question2</Trans>
              </h3>
              <p>
              <Trans>privacy-answer2</Trans>
              </p>
              <ol type="a">
                <li id="section-3-a">
                  <p>
                  <Trans>privacy-answer2-2</Trans>
                  </p>
                </li>
                <p>
                  <small>
                  <Trans>privacy-answer2-3</Trans>
                  </small>
                </p>
                <li id="section-3-b">
                  <p>
                  <Trans>privacy-answer2-4</Trans>
                  </p>
                </li>
                <p>
                  <small>
                  <Trans>privacy-answer2-5</Trans>
                  </small>
                </p>
                <li id="section-3-c">
                  <p>
                  <Trans>privacy-answer2-6</Trans>
                  </p>
                </li>
                <p>
                  <small>
                  <Trans>privacy-answer2-7</Trans>
                  </small>
                </p>
                <li id="section-3d">
                  <p>
                  <Trans>privacy-answer2-8</Trans>
                  </p>
                </li>
                <p>
                  <small>
                  <Trans>privacy-answer2-9</Trans>
                  </small>
                </p>
              </ol>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">
              <Trans>privacy-question3</Trans>
              </h3>
              <p>
              <Trans>privacy-answer3</Trans>
              </p>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">
              <Trans>privacy-question4</Trans>
              </h3>
              <p>
              <Trans>privacy-answer4</Trans>
              </p>
              <p>
              <Trans>privacy-answer4-2</Trans>
              </p>
              <ol type="a">
                <li>
                  <p>
                  <Trans>privacy-answer4-3</Trans>
                  </p>
                </li>
                <li>
                  <p>
                  <Trans>privacy-answer4-4</Trans>
                  </p>
                </li>
              </ol>
            </section>
            <section className="page--content">
              <h3 className="text-notehead">
              <Trans>privacy-question5</Trans>
              </h3>
              <p>
              <Trans>privacy-answer5</Trans>
              </p>
            </section>
            <section className="page--content">
              <h3 className="text-notehead"><Trans>privacy-question6</Trans></h3>
              <p>
              <Trans>privacy-answer6</Trans>
              </p>
              <p>
              <Trans>privacy-answer6-2</Trans>
              </p>
              <p>
              <Trans>privacy-answer6-3</Trans>
              </p>
              <p>
              <Trans>privacy-answer6-4</Trans>
              </p>
              <p>
              <Trans>privacy-answer6-5</Trans>
              </p>
              <p>
              <Trans>privacy-answer6-6</Trans>
              </p>
              <p>
              <Trans>privacy-answer6-7</Trans>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )

export default PrivacyPolicy

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
