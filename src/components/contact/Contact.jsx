import "./contact.css";
import { useEffect, useState } from "react";
import texts from "../Texts";
import contactNow from "../../assets/contactnow.png";
import signButton from "../../assets/signbutton.png"
import Input from "../home/Input";

export default function Contact({ setSelected }) {
  const {contact} = texts
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [age, setAge] = useState(null)
  const [phone, setPhone] = useState(null)
  const [mail, setMail] = useState(null)
  useEffect(() => {
    setSelected("contact");
  }, []);
  return (
    <div className="contact-page">
      <p className="welcome">{texts.welcome}</p>
      <div className="contact-now">
        <img src={contactNow} alt="" />
      </div>
      <form className="form">
        <Input text={contact.fname} state={fname} setState={setFname} type={"text"}/>
        <Input text={contact.lname} state={lname} setState={setLname} type={"text"}/>
        <Input text={contact.age} state={age} setState={setAge} type={"tel"}/>
        <Input text={contact.phone} state={phone} setState={setPhone} type={"tel"}/>
        <Input text={contact.email} state={mail} setState={setMail} type={"email"}/>
      </form>
      <div className="sign">
        <img src={signButton} alt="" />
      </div>
      <p className="end-text">{contact.endText}</p>
      <h2 className="waiting">{contact.waiting}</h2>
    </div>
  );
}
