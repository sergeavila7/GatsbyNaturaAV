import React from "react"
const Cards = props => {
  return (
    <div className="card noHover">
      <div className="card__description">
        <i className="card__icon mb-2">{props.icon}</i>
        <h4 className="card__title">{props.title}</h4>
      </div>
    </div>
  )
}
export default Cards
