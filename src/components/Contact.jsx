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
        <li>
          <a
            href="mailto:juanmorales.redomega@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
            className="email"
          >
            <i class="far fa-envelope"></i>{" "}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
