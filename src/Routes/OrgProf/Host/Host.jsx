import React, {useState, useEffect} from "react";
import "./Host.css";
import { icon1, icon2, icon3 } from "../../../assets";
import { database } from "../../../config/appwrite";
import { ID } from "appwrite";
import { ToastContainer, toast } from 'react-toastify';



const Host = () => {
  const [name,setName]=useState("")
  const [date,setDate]=useState("")
  const [location,setLocation]=useState("")
  const [desc,setDesc]=useState("")
  
  
  const createEvent = async (e) => {
    e.preventDefault();
    const res = await database.createDocument(
      "658fb4872811d10690cc",
      "659ae042bb91df79de32",
      ID.unique(),
      {
        name,
        date,
        location,
        desc,
      }
    );
    setName("");
    setDate("");
    setLocation("");
    setDesc("");

    
  };




  return (
    <div className="body">
    <div className="main">
      <h2 className="head">HOST YOUR EVENT WITH US</h2>
      <form onsubmit="showAlert(event)">
        <p className="event">
          <label>
            EVENT NAME:
            <input type="text"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }} 
            required
            className="input1" />
          </label>
        </p>
        <p>
          <div className="clock">
            <img className="icon1" alt="" src= {icon1} />
            <input type="date" id="date"
            value={date}
            onChange={(e)=>{
              setDate(e.target.value)
            }} 
            required
            className="date" />
          </div>
        </p>

        <div className="clock">
          <img className="icon2" alt="" src={icon2} />
          <input type="text" 
          value={location}
          onChange={(e)=>{
            setLocation(e.target.value)
          }} 
          required
          className="input2" />
        </div>

        <div className="clock">
          <img className="icon3" alt="" src={icon3} />
          <input type="text"
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }} 
          required
          
          
          className="input3" />
        </div>

        <p>
        <button class="submit" onClick={createEvent}>
        <div class="host1">Host Event</div>
      </button>


          {/* <button type="submit" onClick={createProgress}
           className="host1">
            Host Event
          </button> */}
        </p>
      </form>
    </div>
    </div>
  );
};

export default Host;