import React from "react"

import logo from "../images/logo-viblio.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import youtube from "../images/youtube.svg"

const menus = [
  [
    { page: "chi siamo", url: "/about" },
    { page: "partners", url: "/partners" },
    { page: "contatti", url: "/contacts" },
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
          {menus.map((menu, i) => (
            <div key={i} className="column footer--menu">
              <ul>
                {menu.map((link, i) => (
                  <li key={i}>
                    <a href={link.url}>{link.page}</a>
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
      <a href="https://www.iubenda.com/privacy-policy/69014013/cookie-policy" class="iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>  
    </footer>
  )
}
