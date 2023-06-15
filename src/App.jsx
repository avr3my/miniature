import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Signup from "./components/signup/Signup";
import MyProfile from "./components/myProfile/MyProfile";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import texts from "./components/Texts";


export default function App() {
  const [selected, setSelected] = useState("home");
  useEffect(()=>{
    document.title = texts.name
  },[])

  return (
        <div dir="rtl" className={`main-div`}>
          <Nav selected={selected} setSelected={setSelected}/>

          <Routes>
            <Route exact path="/" element={<Home setSelected={setSelected} />} />
            <Route exact path="/contact" element={<Contact setSelected={setSelected} />} />
            <Route exact path="/sign-up" element={<Signup setSelected={setSelected}/>} />
            <Route exact path="/my-profile" element={<MyProfile setSelected={setSelected}/>} />
            <Route path="/*" element={<h1>ERROR</h1>} />
          </Routes>
        </div>
  );
}

