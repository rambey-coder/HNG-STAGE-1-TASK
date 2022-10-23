import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainPage = () => {
  return (
    <>
      <Header />

    <div className="links">
        <a href="">Twitter Link</a>
        <a href="">Zuri Team</a>
        <a href="">Zuri Books</a>
        <a href="">Python Books</a>
        <a href="">Background Checker for Coders</a>
        <a href="">Design Books</a>
      </div>

      <div className="account">
        <a href="">
          <img src="/assets/slack-icon.svg" alt="slack" />
        </a>

        <a href="">
          <img src="/assets/github-icon.svg" alt="github" />
        </a>
      </div>

      <Footer />
      </>
  )
}

export default MainPage