import React from 'react'
import "./listing.css"
import {BsArrowRightShort} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import img1 from "../../../Assets/img1.jpg"
import img2 from "../../../Assets/img2.jpg"
import img3 from "../../../Assets/img3.jpg"
import img4 from "../../../Assets/img4.jpg"

import persona1 from "../../../Assets/persona.jpg"
import persona2 from "../../../Assets/persona2.jpg"
import persona3 from "../../../Assets/persona3.jpg"
import persona4 from "../../../Assets/persona4.jpg"
const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>
          My Listings
        </h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
          <div className="singleItem">
            <AiFillHeart className="icon"/>
            <img src={img1} alt="Img name" />
            <h3>
              Plastic bottle
            </h3>
          </div>

          <div className="singleItem">
            <AiOutlineHeart className="icon"/>
            <img src={img2} alt="Img name" />
            <h3>
              Can
            </h3>
          </div>

          <div className="singleItem">
            <AiFillHeart className="icon"/>
            <img src={img3} alt="Img name" />
            <h3>
              Glass bottle
            </h3>
          </div>

          <div className="singleItem">
            <AiOutlineHeart className="icon"/>
            <img src={img4} alt="Img name" />
            <h3>
              Cardboard
            </h3>
          </div>
      </div>

      <div className="recyclers flex">
        <div className="topRecyclers">
          <div className="heading flex">
            <h3>
              Top Recyclers
            </h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon"/>
            </button>
          </div>

        <div className="card flex">
          <div className="users">
            <img src={persona1} alt="img user" />
            <img src={persona2} alt="img user" />
            <img src={persona3} alt="img user" />
            <img src={persona4} alt="img user" />
          </div>
          <div className="cardText">
            <span>
              More than 12014 recycled products <br/>
              <small>
                Good job <span className="date">7 days</span>
              </small>
            </span>
          </div>
        </div>
        </div>

        <div className="featuredRecyclers">
          <div className="heading flex">
            <h3>
              Featured Recyclers
            </h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon"/>
            </button>
          </div>

        <div className="card flex">
          <div className="users">
            <img src={persona1} alt="img user" />
            <img src={persona2} alt="img user" />
            <img src={persona3} alt="img user" />
            <img src={persona4} alt="img user" />
          </div>
          <div className="cardText">
            <span>
              More than 34143 recycled products <br/>
              <small>
                Congratulations!,Let's go for more <span className="date">30 days</span>
              </small>
            </span>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default Listing