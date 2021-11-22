import React from "react"

import logo from "../images/logo-viblio.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"

const menus = [
  [
    { page: "chi siamo", url: "/about" },
    { page: "partners", url: "/partners" },
    // { page: "contatti", url: "/contact" },
  ],
  [
    { page: "Privacy policy", url: "/privacy" },
    { page: "Cookie policy", url: "/cookies" },
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
          {menus.map(menu => (
            <div className="column footer--menu">
              <ul>
                {menu.map(link => (
                  <li>
                    <a href={link.url}>{link.page}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="column footer--social">
            <img src={linkedin} alt="logo linkedin" height="40px" />
            <img src={twitter} alt="logo twitter" height="40px" />
            <img src={instagram} alt="logo instagram" height="40px" />
          </div>
        </div>
      </div>
    </footer>
  )
}
