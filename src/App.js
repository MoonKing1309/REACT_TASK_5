import './App.css'
import { useState } from 'react'
import "react-widgets/styles.css";
import DatePicker from "react-widgets/DatePicker";



export default function App()
{
  const [age,setAge] = useState(false);
  const [temp,setTemp] = useState(false);

  function handleInput(event)
  {
    setAge(false)
    var today = new Date();
    var birthDate = new Date(event.target.value.toString());
    var agee = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      agee--
  }
    console.log(agee)
   if(agee>0)
    setTemp(`You're ${agee} years old`)
   else if(agee<0)
    setTemp("Invalid Input");
   else
    {
      if(today.getMonth()>birthDate.getMonth())
       {
         setTemp(`You're ${Math.floor((today-birthDate)/(1000*60*60*24))} days old`)
       }
       else if((today.getMonth()<birthDate.getMonth()) && (today.getFullYear()<birthDate.getFullYear()))
       {
        setTemp("Invalid Input");
       }
       else if((today.getMonth()<=birthDate.getMonth()) && (today.getFullYear()>birthDate.getFullYear()))
       {
        setTemp(`You're ${Math.floor((today-birthDate)/(1000*60*60*24))} days old`)
       }
       else
       {
        if(today.getDate()>birthDate.getDate())
        {
          setTemp(`You're ${Math.floor((today-birthDate)/(1000*60*60*24))} days old`)
        }
        else if(today.getDate()<birthDate.getDate())
        {
         setTemp("Invalid Input");
        }
       }

    }
   
   
  }
   function handleSubmit(event)
  {
    event.preventDefault();
    setAge(temp);
  }
  return(
    <div className="body">
      <h1 className="title">Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date"><h5>Enter your date of birth</h5></label>
        <div className='custome-width'>
        <input type="date" id="date" onInput={handleInput}></input>
        </div>
        <button type="submit">Calculate Age</button>
      </form>
      <h3 className={age?"show-output":"hide-output"}>{age}</h3>
      
      
    </div>
  )
}