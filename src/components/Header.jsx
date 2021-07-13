import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/natura.png"

const Header = ({ setTitle }) => (
  <header className="header">
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <input type="checkbox" id="nav" className="hidden" />
      <label for="nav" className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="wrapper">
        <ul className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/benefits">Beneficios</Link>
          <Link to="/contact">!Unete al equipo¡</Link>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
