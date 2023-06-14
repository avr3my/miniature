import "./signup.css"

import {useEffect} from 'react'
import mainImage from "../../assets/hamaslul-transparent.png"
import half from "../../assets/half-year.png"
import year from "../../assets/year.png"
import month from "../../assets/month.png"
import other from "../../assets/other.png"
import { Link } from "react-router-dom"

const images = [month, half, year, other]
export default function Signup({setSelected}) {
  useEffect(()=>{
    setSelected("sign-up")
  },[])
  return (
    <div className="sign-up">
      <div className="top-image">
        <img src={mainImage} alt="" />
      </div>
      <Link className="image-grid" to={"/contact"}>
        {images.map((image,i)=>(
          <div key={i} className="image">
            <img src={image} alt="" />
          </div>
        ))}
      </Link>
    </div>
  )
}
