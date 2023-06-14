import "./hompage.css";
import linkImage from "../../assets/signlink-transparent.png";
import texts from "../Texts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ setSelected }) {
  const [atBottom, setAtBottom] = useState(false)
  useEffect(() => {
    setSelected("home");
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (e) => {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    setAtBottom(currentScroll + 10 > documentHeight)
  };
  return (
    <div className="home-page">
      <p className="welcome">{texts.welcome}</p>
      <h2 className="header">{texts.signup.howto}</h2>
      <p className="content">{texts.signup.longText}</p>
      <Link className={`image ${atBottom? 'bottom': ''}`} to={"./sign-up"}>
        <img src={linkImage} alt="" />
      </Link>
    </div>
  );
}
