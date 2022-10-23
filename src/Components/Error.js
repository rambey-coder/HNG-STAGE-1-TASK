import React from 'react'
import Footer from './Footer'

const Error = () => {
  return (
    <>
    <div className="error">
        <div className='error-container'>
        <p>404 error</p>
        <h1>We can’t find that page</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <div className="error-link">
            <a href="">
                <img src="/assets/back-icon.svg" alt="back" />
                Go back
            </a>

            <a href="">Take me home</a>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Error