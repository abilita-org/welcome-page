import React from "react"

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
          <h3 className="feature--title">{title}</h3>
          <p className="feature--description">{description}</p>
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
