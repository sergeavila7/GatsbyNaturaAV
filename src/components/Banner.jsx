import React from "react"

const Banner = (props) => {
  return (
    <main className="banner"
    style={{
        backgroundImage: `url(${props.url})`
    }}>
      <div className="overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 offset-md-6 text-center text-md-right">
              <h2 className="title fadeInDown">{props.title}</h2>
              <p className="content d-none d-md-block fadeInUp">
                {props.description}
            </p>
              <a className="btn btn-outline-warning fadeInUp" href="#">
                {props.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner
