import React from "react"
import {Trans} from 'gatsby-plugin-react-i18next';

export default function SectionFeature({ id, inverse, data }) {
  const { title, description, image } = data
  return (
    <section id={`feature_${id}`} className="feature">
      <div
        className={`feature--container container columns ${
          inverse ? "is-reverse" : ""
        }`}
      >
        <div className="column feature--content">
          <p>
            <span className="feature--number">{id}</span>
          </p>
          <h3 className="feature--title"><Trans>title-{title}</Trans></h3>
          <p className="feature--description"><Trans>text-{description}</Trans></p>
        </div>
        <div className="column feature--media">
          <img
            className="feature--image"
            src={image.src}
            alt={image.alt}
            height="320px"
          />
        </div>
      </div>
    </section>
  )
}
