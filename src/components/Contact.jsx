import '../styles/Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Submit = () => {
    return (
        <div id = "submit-cont">
            <input id = "submit" type="submit" value="Send" />
        </div>
    );
}
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
    const [isSubmittable, setIsSubmittable] = useState(false);
    const handleFull = () => {
        setIsSubmittable(true);
    }
    const handleChange = (e) => {
        return null
    }
    return (
        <motion.div>
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
                            <input required = {true} autoComplete = "off" id = "name" className = "short-input" type="text" name="user_name" placeholder='click to start typing'/>
                        </div>
                        <div id = "short">
                            <label id = "label">Email</label>
                            <input required = {true} autoComplete = "off" id = "email" className = "short-input" type="email" name="user_email" placeholder='click to start typing'/>
                        </div>
                        <div id = "long">
                            <label id = "label">Message</label>
                            <textarea required = {true} autoComplete = "off" id = "msg" className = "long-input" resizable = "false" name="message" placeholder='click to start typing' />
                        </div>
                        <Submit />
                        {/* { isSubmittable ? <Submit /> : <></>} */}
                    </form>
                </div>
            </div>
        </motion.div>
    );
}
