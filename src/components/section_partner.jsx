import React from "react"
import {Trans} from 'gatsby-plugin-react-i18next';

import harvard from "../images/logo-harvard.svg"
import edx from "../images/logo-edx.svg"
import coursera from "../images/logo-coursera.svg"
import future from "../images/logo-future-learn.svg"
import mixenergy from "../images/logo-mixenergy.svg"
import udacity from "../images/logo-udacity.svg"
import ted from "../images/logo-ted.svg"
import udemy from "../images/logo-udemy.svg"

export default function SectionPartner() {
  return (
    <section id="partners" className="partners">
      <div className="partners--container container">
        <div className="partners--content">
          <h2 className="partners--title">
            <Trans>partner-title</Trans>
          </h2>
          <p className="partners--description">
          <Trans>partner-description</Trans>
          </p>
        </div>
        <div className="partners--grid">
          <img
            className="partners--logo"
            src={harvard}
            alt="logo harvard business review"
          />
          <img className="partners--logo" src={ted} alt="logo ted" />
          <img
            className="partners--logo"
            src={future}
            alt="logo future learn"
          />
          <img className="partners--logo" src={coursera} alt="logo coursera" />
          <img className="partners--logo" src={udacity} alt="logo udacity" />
          <img
            className="partners--logo"
            src={mixenergy}
            alt="logo mixenergy"
          />
          <img className="partners--logo" src={udemy} alt="logo udemy" />
          <img className="partners--logo" src={edx} alt="logo edx" />
        </div>
      </div>
    </section>
  )
}
