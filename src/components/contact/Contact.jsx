import './contact.scss';
import {useState} from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
 const [message,setMessage]=useState(false);
 const handelSubmit =(e)=>{
  e.preventDefault();
  setMessage(true);
   emailjs.sendForm('gmail', 'template_g5b98hr',e.target,'user_xCOmoUNdPhZakf6I0EMLf').then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
 }
 return (
  <div className="contact" id="contact">
   <div className="left">
    <img src="./assets/shake.svg" alt="" />
   </div>
   <div className="right">
    <h2>Contact.</h2>
    <form onSubmit={handelSubmit}>
    
    <input type="text" placeholder="Name" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <textarea placeholder="Message" name="message"></textarea>
    <button type="submit">send</button>
    {message && <span>
     Thanks,I'll reply ASAP :)
     </span>}

    </form>
   </div>
   </div>
 
 )
}
