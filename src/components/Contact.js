import '../styles/Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => { 
        emailjs.sendForm('service_nhp43rw', 'template_thzxchg', form.current, 'BYxAoeQujLymf6GQy')
        .then((result) => {
            console.log(result.text);
            console.log("Message sent")
        }, (error) => {
            console.log(error.text);
        }).then(alert("Your message was received!"));
    };
    return (
        <div id = "form-main">
            <div id = "main-label-cont">
                <div id = "main-label">
                    <span id = "contact">Contact&nbsp;</span><span id = "us">Us</span>
                </div>
            </div>
            <div id = "form-container">
                <form id = "form" ref={form} onSubmit={sendEmail}>
                    <div id = "short" style = {{marginTop: "0vh"}}>
                        <label id = "label">Name</label>
                        <input required = "true" autoComplete = "off" id = "short-input" type="text" name="user_name" placeholder='click to start typing'/>
                    </div>
                    <div id = "short">
                        <label id = "label">Email</label>
                        <input required = "true" autoComplete = "off" id = "short-input" type="email" name="user_email" placeholder='click to start typing'/>
                    </div>
                    <div id = "long">
                        <label id = "label">Message</label>
                        <textarea id = "long-input" resizable = "false" name="message" placeholder='click to start typing' />
                    </div>
                    <div id = "submit-cont">
                        <input required = "true" autoComplete = "off" id = "submit" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
}
