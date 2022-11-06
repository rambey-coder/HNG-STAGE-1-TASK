import React, { useState } from 'react'

const Contact = () => {

    const [value, setValue] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [err, setErr] = useState(false)

    const name = 'Rambey'

    const handleSubmit = (e) => {
        e.preventDefault();

        

        if (message === '') {
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 4000)
        } else {
            setValue('')
            setLast('')
            setEmail('')
            setMessage('')
            alert('Form Submitted Success');
        }

    }

    return (
        <>
            <div className='contact-container'>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <form className="contact" onSubmit={handleSubmit}>
                    <div className="contact-info">
                        <div>
                            <label htmlFor='first_name'>First name</label>
                            <input type="text" id="first_name" placeholder='First name' value={value} onChange={(e) => setValue(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor='last_name'>Last name</label>
                            <input type="text" id="last_name" placeholder='Last name' value={last} onChange={(e) => setLast(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" placeholder='yourname@email.com' value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message" className={err ? 'message active' : 'message'} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <p className={err ? "err-msg active" : "err-msg"}>Please enter a message</p>
                    </div>

                    <label className="container">
                        You agree to providing your data to {name} who may contact you.
                        <input type="checkbox" id='checkmark' />
                        <span className="checkmark"></span>
                    </label>

                    <button id='btn__submit'>Send message</button>
                </form>
            </div>
        </>
    )
}

export default Contact