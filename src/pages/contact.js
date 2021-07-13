import React from 'react'
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
    url= "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    title="¿Qué esperas para cambiar tu vida?"
    description="Estas a un click de formar parte de Natura y hacer tus sueños realidad."
    button="Te invitamos a seguirnos en redes sociales..."/>
              <section class="requirements">
              <div className="container">
        <h2 className="text-center pt-5">Requisitos</h2>
        <div className="row">
       <div className="col-lg-12 d-flex flex-column flex-md-row text-center justify-content-center align-items-center">
              <div className="card">
              <Card 
      icon ={<i class="far fa-address-card"></i>} 
      title="INE"
       />
       </div>
              <div className="card">
              <Card 
      icon ={<i class="fas fa-home"></i>} 
      title="Comprobante de domicilio"
       />
       </div>
       
          
              </div>
              </div>
              </div>
              </section>
              <Form/>
              </>
    )
}

export default Contact
