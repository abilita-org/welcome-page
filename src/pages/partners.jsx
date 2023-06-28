import { graphql } from 'gatsby'
import React from "react"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"
import {Trans} from 'gatsby-plugin-react-i18next';
import SectionPartner from "../components/section_partner"


import "../styles/style.scss"

const Partners = () =>  (
    <>
    <Seo />
      <Header />
      <main>
        <SectionPartner />
        <section className="partners">
          <div className="partners--container container">
            <div className="partners--content">
              <h3 className="partners--title"><Trans>partners-title</Trans></h3>
              <p className="partners--description">
              <Trans>partners-description</Trans>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )

  export default Partners;

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
