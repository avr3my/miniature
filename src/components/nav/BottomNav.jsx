import { Link } from "react-router-dom";
import texts from "../Texts";
export default function BottomNav({ selected, setSelected, menu, setShow }) {


  return (
    <div className={`nav-${menu ? "menu" : "bottom"}`}>
      <Link
        onClick={() => {
          setShow(false);
          setSelected("home");
        }}
        className={`link ${selected === "home" ? "selected" : ""}`}
        to={"/"}
      >
        {texts.nav.home}
      </Link>
      <Link
        onClick={() => {
          setShow(false);
          setSelected("sign-up");
        }}
        className={`link ${selected === "sign-up" ? "selected" : ""}`}
        to={"/sign-up"}
      >
        {texts.nav.sign}
      </Link>
      <Link
        onClick={() => {
          setShow(false);
          setSelected("contact");
        }}
        className={`link ${selected === "contact" ? "selected" : ""}`}
        to={"/contact"}
      >
        {texts.nav.contact}
      </Link>
      <Link
        onClick={() => {
          setShow(false);
          setSelected("my-profile");
        }}
        className={`link ${selected === "my-profile" ? "selected" : ""}`}
        to={"/my-profile"}
      >
        {texts.nav.personal}
      </Link>
    </div>
  );
}
