import { graphql } from 'gatsby'
import React from "react"
import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import FormContact from "../forms/form-contact"
import {Trans} from 'gatsby-plugin-react-i18next';

import "../styles/style.scss"

import viblioBrand from "../images/viblio-brand.svg"

const Contact = () =>(
    <>
      <Seo />
      <Header />
      <main>
        <section className="contacts--cover">
          <div className="contacts--container container">
            <div className="contacts--wrapper columns">
              <div className="contacts--wrapper__logo column">
                <img
                  className="contacts--logo"
                  src={viblioBrand}
                  alt="brand viblio"
                />
              </div>
              <div className="contacts--wrapper__content column">
                <h1 className="text-title"><Trans>contacts</Trans></h1>
                <h2 className="text-heading">Apprendo S.r.l.</h2>
                <ul>
                  <li>
                    <label></label>
                    <span>P. IVA 03029040304</span>
                  </li>
                  <li>
                    <label></label>
                    <span>Via J. Marinoni, 12 33100 Udine</span>
                  </li>
                  <li>
                    <label></label>
                    <span>Numero di REA: UD-359725</span>
                  </li>
                  <li>
                    <label></label>
                    <span>Viblio - Copyright 2019-2023</span>
                  </li>
                  <li>
                  <label>Email</label>
                    <span>info@viblio.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )

export default Contact

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