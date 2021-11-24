import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import FormContact from "../forms/form-contact"

import viblioBrand from "../images/viblio-brand.svg"

export default function Contact() {
  return (
    <>
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
                <h1 className="text-title">Contatti</h1>
                <h2 className="text-heading">Apprendo S.r.l.</h2>
                <ul>
                  <li>
                    <label>Telefono</label>
                    <span>+39 0432512884</span>
                  </li>
                  <li>
                    <label>Settore</label>
                    <span>Digital Learning</span>
                  </li>
                  <li>
                    <label>Sede principale</label>
                    <span>Via J. Marinoni, 12 33100 Udine</span>
                  </li>
                  <li>
                    <label>Sede secondaria</label>
                    <span>Via Andrea Appiani 12, 20121 Milano (MI)</span>
                  </li>
                  <li>
                    <label>Tipo</label>
                    <span>Società privata non quotata</span>
                  </li>
                  <li>
                    <label>Data di fondazione</label>
                    <span>2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="contacts--form">
          <div className="contacts--container container">
            <FormContact id="contact_form" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
