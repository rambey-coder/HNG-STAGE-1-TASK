import React from 'react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className="error">
        <div className='error-container'>
        <p>404 error</p>
        <h1>We can’t find that page</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <div className="error-link">
            <Link onClick={() => navigate(-1)}>
                <img src="/assets/back-icon.svg" alt="back" />
                Go back
            </Link>

            <Link to="/">Take me home</Link>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Error