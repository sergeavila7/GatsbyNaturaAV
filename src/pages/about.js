import React from "react"
import Banner from "../components/Banner"
import CarouselContainer from "../components/CarouselContainer"
import SEO from "../components/seo"
import "../styles/styles.scss"
import BannerAbout from "../images/natura-about.jpg"
import Omega from "../images/OMEGA.png"

const About = () => {
  return (
    <>
      <SEO title="About" />
      <Banner
        url={BannerAbout}
        title="¿Qué es Natura ?"
        description="Natura es una compañía multinacional brasileña del sector de cosméticos, higiene y belleza, con modelo comercial multicanal de ventas fundada hace 50 años."
      />
      <section className="about__natura">
        <div className="container">
          <div class="row justify-content-center align-items-center">
            <div className="about__team col-md-10 col-12">
              <h2 className="text-center">
                <span>¿Quieres vender Natura?</span>
              </h2>
              <p>
                <strong>Trabaja con nosotros</strong>
              </p>
              <p>
                ¿Quieres formar parte de una empresa con gran cultura
                organizacional? Te estamos buscando para que haga parte de
                nuestro equipo administrativo. Acá tenemos distintos equipos
                donde tú puedes desarrollar toda su capacidad. ¡Únete a nuestro
                equipo!
              </p>
              <h3 className="text-center pt-4">
                <span>Trabajar en Natura es diferente</span>
              </h3>
              <p className="pb-4">
                Sabemos que vivimos en una sociedad en la que las personas pasan
                gran parte del día en sus trabajos y cada vez más buscan
                compañías donde puedan equilibrar su vida profesional y
                personal. En Natura reconocemos ese contexto y nos definimos
                como una empresa de relaciones, que prioriza los vínculos
                genuinos y que está cerca de los colaboradores y colaboradoras.
                Nuestra misión es acompañar a nuestros colaboradores y
                colaboradoras desde el inicio de su historia con Natura y
                durante todo su camino de carrera, logrando su desarrollo
                integral, promoviendo un buen clima laboral y la búsqueda de
                propósito y alineamiento con los valores de Natura.
              </p>
            </div>
            <div className="about__natura--img col-lg-6">
              <img src="https://www.milenio.com/uploads/media/2021/06/17/natura-fuerza-ventas-formada-mil.jpeg" />
            </div>
            <div className="about__natura--description col-lg-6 bg-light">
              <h2 className="text-center mt-2">
                <span>Consultor(a)</span>
              </h2>
              <p>
                Ser Consultor Natura es comenzar tu camino como emprendor,
                encantando a tus clientes con los Rituales de producto
                acercandonos al "Bien estar bien".
              </p>

              <h4 className="text-center">Obten beneficios como:</h4>
              <ul>
                <li>
                  Programa de
                  <strong> Reconocimiento exclusivo.</strong>
                </li>
                <li>
                  Plataforma Virtual de <strong>Formacion.</strong>
                </li>
                <li>
                  Tallers con especialistas de
                  <strong> producto, negocio y desarrollo.</strong>
                </li>
                <li>
                  Gana
                  <strong> Campañas, productos y regalos especiales.</strong>
                </li>
                <li>
                  Ganancias de hasta el
                  <strong> 150% </strong>
                  por la venta de producto.
                </li>
              </ul>
            </div>
            <div class="row flex-row-reverse justify-content-center align-items-center ">
              <div className="about__natura--img col-lg-6 ">
                <img src="https://www.eadic.com/wp-content/uploads/2019/07/liderazgo_equipos-680x510.jpg" />
              </div>
              <div className="about__natura--description col-lg-6 bg-light">
                <h2 className="text-center mt-2">
                  <span>Líder</span>
                </h2>
                <p>
                  Ser Líder Natura es expandir tu emprendimiento, desarrollarte
                  en el manejo de personas, gestión de equipo, liderazgo y
                  comunicación, transformando tu vida y la de los demás.
                </p>
                <ul>
                  <li>
                    Por cada persona que invites a transformas su vida inicas
                    <strong> ganando $1,650.</strong>
                  </li>
                  <h4 className="text-center pt-4">Plan 5x5</h4>
                  <li>
                    Invitando a 5 personas nuevas cada ciclo a comenzar su
                    negocio Natura y dandoles seguimiento podras ganar más de
                    <strong> $29,000 </strong>
                    en 3 meses y medio.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section classname="testimonials">
        <div className="container-sm">
          <CarouselContainer />
        </div>
      </section>
    </>
  )
}

export default About
