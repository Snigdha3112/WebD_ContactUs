import React from 'react'
import cImage from "../assets/cImage.avif";
import "../styles/contact.css";

function Contact() {
  return (
    <div className= "contact"> 
     <div 
       className= "leftside"
       style={{backgroundImage: 'url($(cImage))' }}
     ></div>
     <div className= "rightside"> 
       <h1>Contact Us</h1>

       <form id="contact-form" method= "POST">
        <label htmlFor="name">Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Enter email..." type="email" />
        <label htmlFor="message">Message</label>
        <text.area 
        rows="6" 
        placeholder= "Enter message..." 
        name="message" 
        required
        ></text.area>
        <button type="submit"> Send Message</button>

       </form>
     </div>
    </div>
  );
}

export default Contact;