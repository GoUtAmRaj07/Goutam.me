import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__option">


          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>goutamraj9693@gmail.com</h5>
            <a href="mailto:goutamraj9693@gmail.com">Sent a mail</a>
          </article>


          <article className="contact__option">
            <BsWhatsapp/>
            <h4>Whatsapp me</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone+919798262081" target="_blank">Text me on Whatsapp</a>
          </article>


        </div>
        {/* END OF CONTACT */}
        {/* <form action="">
          <input type="text" name = "name" placeholder="your full name" required/>
          <input type="email" name = "email" placeholder="your Email" required/>
          <textarea name = "message" rows = "7" placeholder="your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form> */}
      </div>
    </section>
  )
}

export default contact