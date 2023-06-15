import "./nav.css";
import texts from "../Texts";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import BottomNav from "./BottomNav";
export default function Nav({ selected, setSelected }) {
  const [show, setShow] = useState(true) 
  return (
    <>
      <div className="nav-top">
        <span className="name">{texts.name}</span>
        <span className="logos">
          <a className="outer"
            href={`https://api.whatsapp.com/send?phone=972534873704&text=${texts.message}`}
          >
            <FaWhatsapp />
          </a>
          <i  className="outer">
            <BiSearch />
          </i>
          <i className="outer" onClick={()=> setShow(!show)}>
            <SlOptionsVertical />
            {/* {show && <BottomNav setShow={setShow} selected={selected} setSelected={setSelected} menu/>} */}
          </i>
        </span>
      </div>
      <BottomNav setShow={setShow} selected={selected} setSelected={setSelected}/>
    </>
  );
}
