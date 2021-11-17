import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import logo from "../images/logo-viblio.svg"
export default function About() {
  return (
    <>
      <Header />
      <main>
        <section id="cover" className="cover">
          <div className="cover--container container">
            <div className="cover--content">
              <img className="cover--logo cover--logo-small" src={logo} alt="logo viblio" />
              <p className="cover--subtitle">
                Qui a Viblio crediamo nella conoscenza.
                <br />
                <br />
                Conoscere per aprirsi al futuro e alle sue possibilità
                <br />
                Conoscere per essere liberi, padroni del proprio destino
                <br />
                Conoscere per abbattere le barriere e i pregiudizi
                <br />
                Conoscere per diventare migliori
              </p>
              <p className="cover--subtitle">
                Abbiamo creato un luogo dove tutto questo è possibile, dove
                apprendere non è soltanto un obiettivo personale o
                professionale, ma è soprattutto un’esperienza di arricchimento
                di sé.
              </p>
              <p className="cover--subtitle">
                Speriamo che con il nostro strumento tu possa entusiasmarti per
                quello che il mondo e la tecnologia di oggi rendono possibili, e
                che tu possa iniziare un percorso ricco di significato e di
                bellissime sorprese.
              </p>
              <p className="cover--subtitle">
                Buon viaggio!
                <br />
                <br />
                <br />
                Il team di Viblio
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
