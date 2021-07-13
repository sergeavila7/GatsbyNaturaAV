import React from "react"
const Cards = props => {
  return (
      <div className="card__description">
        <i className="card__icon mb-2">{props.icon}</i>
        <h3 className="card__title">{props.title}</h3>
      </div>
  )
}
export default Cards

// const Card = props => {
//   return (
//     <div className="card">
//           <div className="card__body">
//             <div className="card__icon">
//               <span>
//                 {props.icon}
//               </span>
//             </div>
//             <h3 className="card__description--title">{props.title}</h3>
//               <p className="card__description--text">
//                {props.description}
//               </p>
//           </div>
//           </div>

//   )
// }
