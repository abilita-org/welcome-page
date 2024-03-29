import { graphql } from 'gatsby'
import React from "react"

import brain from "../images/brain-connected.svg"
import face from "../images/face-detected.svg"
import book from "../images/book-opened.svg"
import run from "../images/mountain-run.svg"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import SectionCover from "../components/section_cover"
import SectionFeature from "../components/section_feature"
import SectionPartner from "../components/section_partner"
import SectionClients from "../components/section_clients"


import "../styles/style.scss"


const data = {
  feartures: [
    {
      title:
        "1",
      description:
        "1",
      image: { src: brain, alt: "brain connected" },
    },
    {
      title:
        "2",
      description:
        "2",
      image: { src: face, alt: "face detection" },
    },
    {
      title: "3",
      description:
        "3",
      image: { src: book, alt: "book opened" },
    },
    {
      title:
        "4",
      description:
        "4",
      image: { src: run, alt: "run between mountains" },
    },
  ],
}

const IndexPage = () => (
  <>
    <Seo />
    <Header />
    <main>
      <SectionCover />
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
);

export default IndexPage;


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

