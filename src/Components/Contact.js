import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
        <div className='contact-container'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form className="contact">
                <div className="contact-info">
                      <div>
                          <label>First name</label>
                          <input type="text" id="first_name" placeholder='First name'/>
                      </div>
                      <div>
                          <label>Last name</label>
                          <input type="text" id="last_name" placeholder='Last name'/>
                      </div>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" id="email" placeholder='yourname@email.com' />
                </div>
                <div>
                    <label>Message</label>
                    <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message"></textarea>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="" id="" />
                    <p>You agree to providing your data to name who may contact you.</p>
                </div>

                <button id='btn_submit'>Send message</button>
            </form>
        </div>
        <Footer />
    </>
  )
}

export default Contact