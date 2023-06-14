import "./nav.css";

import { useEffect, useState } from "react";
import texts from "../Texts";
import { Link } from "react-router-dom";

import {FaWhatsapp } from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import {SlOptionsVertical} from "react-icons/sl"
export default function Nav({selected, setSelected}) {
  
  return (
    <>
      <div className="nav-top">
        <span className="name">{texts.name}</span>
        <span className="logos">
          <FaWhatsapp/>
          <BiSearch/>
          <SlOptionsVertical/>
        </span>
      </div>
      <div className="nav-bottom">
        <Link
          onClick={() => setSelected("home")}
          className={`link ${selected === "home" ? "selected" : ""}`}
          to={"/"}
        >
          {texts.nav.home}
        </Link>
        <Link
          onClick={() => setSelected("sign-up")}
          className={`link ${selected === "sign-up" ? "selected" : ""}`}
          to={"/sign-up"}
        >
          {texts.nav.sign}
        </Link>
        <Link
          onClick={() => setSelected("contact")}
          className={`link ${selected === "contact" ? "selected" : ""}`}
          to={"/contact"}
        >
          {texts.nav.contact}
        </Link>
        <Link
          onClick={() => setSelected("my-profile")}
          className={`link ${selected === "my-profile" ? "selected" : ""}`}
          to={"/my-profile"}
        >
          {texts.nav.personal}
        </Link>
      </div>
    </>
  );
}
