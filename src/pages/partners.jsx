import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Partner from "../components/partner"

import "../styles/style.scss"

export default function Partners() {
  return (
    <>
      <Header />
      <main>
        <Partner />
        <section className="partners">
          <div className="partners--container container">
            <div className="partners--content">
              <h3 className="partners--title">NON CI FERMIAMO MAI</h3>
              <p className="partners--description">
                La nostra rete è in continua crescita: vogliamo portarti tutto
                il meglio che c’è.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
