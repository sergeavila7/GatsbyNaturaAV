import React from "react"
import Banner from "../components/Banner"
import Form from "../components/Form"
import Card from "../components/Card"
import SEO from "../components/seo"
import "../styles/styles.scss"
const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Banner
        url="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="¿Quieres Formar parte de Natura?"
        description="Integrate nuestro equipo de más de 6.300 colaboradores"
          button={
          <a href="mailto:juanmorales.redomega@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">
            Contáctanos y te guíamos en el proceso...
          </a>
        }
      />
      <section class="requirements ">
        <div className="container">
          <h4 className="text-center pt-5"><span>Requisitos</span></h4>
          <div className="row">
            <div className="col-lg-12 d-flex flex-column flex-md-row text-center justify-content-center align-items-center">
              <div className="card">
                <Card icon={<i class="far fa-address-card"></i>} title="INE" />
              </div>
              <div className="card">
                <Card
                  icon={<i class="fas fa-home"></i>}
                  title="Comprobante de domicilio"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Form />
    </>
  )
}

export default Contact
