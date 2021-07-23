import React from "react"
const Contact = () => {
  return (
    <div
      className="container__contact
        "
    >
      <ul>
        <li>
          <a href="tel:+525580331945" className="phone">
            <i className="fas fa-phone-alt"></i>{" "}
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/525580331945/?text=Natura Red Omega"
            className="wp"
          >
            <i className="fab fa-whatsapp"></i>{" "}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
