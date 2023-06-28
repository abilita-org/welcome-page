import React from "react"
import {Link, Trans} from 'gatsby-plugin-react-i18next';

import logo from "../images/logo-viblio.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import youtube from "../images/youtube.svg"

const menus = [
  [
    { page: "about", url: "/about" },
    { page: "partners", url: "/partners" },
    { page: "contacts", url: "/contacts" },
  ],
  [
    { page: "privacy", url: "/privacy" },
    { page: "cookie", url: "/cookies" },
  ],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container container">
        <div className="columns">
          <div className="column footer--head">
            <img className="footer--logo" src={logo} alt="logo viblio" />
            <p className="footer--text">
              <small>
                Develop yourself, <br /> evolve the world
              </small>
            </p>
          </div>
          {menus.map((menu, i) => (
            <div key={i} className="column footer--menu">
              <ul>
                {menu.map((link, i) => (
                  <li key={i}>
                    <Link to={link.url}><Trans>{link.page}</Trans></Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="column footer--social">
            <a href="https://www.linkedin.com/company/viblio-digital-learning/"><img src={linkedin} alt="logo linkedin" height="40px" /></a>
            <a href="https://www.youtube.com/channel/UC9cmrl8fGC3BVe46_V2T3dg"><img src={youtube} alt="logo youtube" height="40px" /></a>
            <a href="https://www.instagram.com/helloviblio/"><img src={instagram} alt="logo instagram" height="40px" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
