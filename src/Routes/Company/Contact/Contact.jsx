
import React, {useState, useEffect} from "react";
import "./Contact.css";
import { msg, call, loc } from "../../../assets";
import { database } from "../../../config/appwrite";
import { ID } from "appwrite";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")


  const createMsg= async (e) => {
    // if(name.length<3){
    //   return
    // }
    // if(email.length<5) {
    //   return
    // }
    // if(message.length<10) {
    //   return
    // }
    console.log("hello")
    const res= await database.createDocument("658fb4872811d10690cc","658fb50b21159a9e22ba",ID.unique(),{
      body:message,
      username:name,email
    })
    setName("") 
    setEmail("")
    setMessage("")

  }


  return (
    <div class="contact" id="contact">
      <div class="rect"></div>
      <button class="submit" onClick={createMsg}>
        <div class="submit1">Submit</div>
      </button>
      <input class="checkbox" required="{true}" type="checkbox" />
      <div class="agree">I agree to the terms & conditions</div>


      <div class="name">Name</div>
      <div class="big-box">

        <input class="input"
        value={name} 
        onChange={(e)=>{
          setName(e.target.value)
        }}
        required
        type="text" />
      </div>
      
      
      <div class="message">Message</div>
      <div class="box">
        <input class="input1"
        value={message}
        onChange={(e)=>{
          setMessage(e.target.value)
        }} 
        required
        type="text" />
      </div>

      
      <div class="email">Email</div>
      
      <div class="box1">
        <input class="input1"
        value={email} 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        required
        type="email" />
      </div>
      
      <div class="address">123 Main St, New BEL Road,Bangalore, India</div>
      <img class="loc-icon" alt="" src={loc} />
      <div class="number">+91 223-123-123</div>
      <img class="call-icon" alt="" src={call} />
      <div class="mail">info@gmail.com</div>
      <img class="msg-icon" alt="" src={msg} />
      <b class="head2">
        Stay connected with us for upcoming CSR events and their locations.
      </b>
      <b class="head">Get in Touch</b>
      <div class="sm-head">Discover</div>
    </div>
  );
};

export default Contact;
