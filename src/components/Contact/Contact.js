import React from 'react'
import './Contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact-container">
        <h1 className='title'>Contact</h1>
        <div className='contact-content-container'>
            <textarea className="textarea" cols="70" rows="25" placeholder='Please Write Suggestion'></textarea>
            <div>
            <button className='contact-button'>Send Suggestion</button>
            </div>
        </div>
        <div className='footer-container'>
        <a className="footer-link" href="https://www.instagram.com/prasanthpaul_/"><BsInstagram className='footer-icon'/></a>
            <a className="footer-link" href="mailto:prasanthpaulmedisetti@gmail.com"><SiGmail className='footer-icon'/></a>
            <a className="footer-link" href="https://wa.me/9391698393"><FaWhatsapp className='footer-icon'/></a>
        </div>
    </div>
  )
}

export default Contact