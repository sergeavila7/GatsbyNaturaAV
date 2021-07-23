import React from "react"
import Omega from "../images/OMEGA.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="container-socials">
            <div className="col-lg-12 d-flex flex-column-reverse flex-md-row text-center justify-content-center align-items-center">
              <div className="logoNatura">
                <img src={Omega} loading="lazy" />
              </div>
              <div className="socials pt-5">
                <ul>
                  <h3>Andrea Vazquez</h3>
                  <p>Lider Natura</p>
                  <li>
                    <a
                      href="https://www.facebook.com/NaturaAndreaVa/"
                      target="_blank"
                      className="facebook"
                    >
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="development text-center">
        ©Desarrollador SJAV 2021 🐱‍👤 | Todos los derechos reservados
      </div>
    </footer>
  )
}

export default Footer
