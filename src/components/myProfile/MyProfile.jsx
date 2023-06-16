import "./myProfile.css"
import texts from "../Texts"
import { useEffect, useState } from 'react'
import trophy from "../../assets/trophy.png"
import Task from "./Task";

export default function MyProfile({setSelected}) {
  useEffect(()=>{
    setSelected("my-profile")
  },[])
  const [tasks,setTasks]= useState([]);
  useEffect(() => {
    setTasks([]);
    let arr = []
    for (let i = 0; i < 4; i++) {
      const rand = Math.floor(Math.random() * texts.personal.achivements.length);
      if (arr.includes(rand)) i--;
      else arr.push(rand);
    }
    arr.forEach(i=> setTasks(prev=>[...prev, texts.personal.achivements[i]]))
  }, []) 
  
  return (
    <div className='profile-page'>
      <div className="trophy">
        <img src={trophy} alt="" />
        <h1>{texts.personal.wellDone}</h1>
        <h2>{texts.personal.wellDone2}</h2>
      </div>

      <ul className="completed-tasks">
        {tasks.map((task, i)=>(
          <Task key={i} content={task}/>
        ))}
      </ul>
    </div>
  )
}
