import { graphql } from 'gatsby'
import React from "react"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"
import logo from "../images/logo-viblio.svg"
import {Trans} from 'gatsby-plugin-react-i18next';

import "../styles/style.scss"

const About = () => (
    <>
      <Seo />
      <Header />
      <main>
        <section id="cover" className="cover">
          <div className="cover--container container">
            <div className="cover--content">
              <img
                className="cover--logo cover--logo-small"
                src={logo}
                alt="logo viblio"
              />
              <p className="cover--subtitle">
                <Trans>about-title</Trans>
                <br />
                <br />
                <Trans>about-line1</Trans>
                <br />
                <Trans>about-line2</Trans>
                <br />
                <Trans>about-line3</Trans>
                <br />
                <Trans>about-line4</Trans>
              </p>
              <p className="cover--subtitle">
              <Trans>about-description</Trans>
              </p>
              <p className="cover--subtitle">
              <Trans>about-description1</Trans>
              </p>
              <p className="cover--subtitle">
              <Trans>about-bye</Trans>
                <br />
                <br />
                <br />
                <Trans>about-sign</Trans>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )

  export default About;

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
