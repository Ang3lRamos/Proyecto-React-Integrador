import React from 'react'
import "./activity.css"
import {BsArrowRightShort} from "react-icons/bs"

import persona1 from "../../../Assets/persona.jpg"
import persona2 from "../../../Assets/persona2.jpg"
import persona3 from "../../../Assets/persona3.jpg"
import persona4 from "../../../Assets/persona4.jpg"
const Activity = () => {
  return (
    
    <div className="activitySection">
      <div className="heading flex">
        <h1>
          Recent Activity
        </h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={persona1} alt="Img customer" />
          <div className="customerDetails">
            <span className="name">
              Enrique Aguilar
            </span>
            <small>
              New User
            </small>
          </div>
          <div className="duration">
            2 min. ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={persona2} alt="Img customer" />
          <div className="customerDetails">
            <span className="name">
              Enrique Aguilar
            </span>
            <small>
              New User
            </small>
          </div>
          <div className="duration">
            2 min. ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={persona3} alt="Img customer" />
          <div className="customerDetails">
            <span className="name">
              Enrique Aguilar
            </span>
            <small>
              New User
            </small>
          </div>
          <div className="duration">
            2 min. ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={persona4} alt="Img customer" />
          <div className="customerDetails">
            <span className="name">
              Enrique Aguilar
            </span>
            <small>
              New User
            </small>
          </div>
          <div className="duration">
            2 min. ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity