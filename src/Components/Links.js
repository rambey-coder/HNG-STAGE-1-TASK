import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
      <Header />

    <div className="links">
        <a href="https://twitter.com/Rambeybello">Twitter Link</a>
        <a href="https://training.zuri.team/" id='btn__zuri'>Zuri Team</a>
        <a href="http://books.zuri.team" id='books'>Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<rambey>" id='book__python'>Python Books</a>
        <a href="https://background.zuri.team" id='pitch'>Background Checker for Coders</a>
        <a href="https://books.zuri.team/design-rules" id='book__design'>Design Books</a>
        <Link to='/contact'>Contact Me</Link>
      </div>

      <div className="account">
          <img src="/assets/slack-icon.svg" alt="slack" />

          <img src="/assets/github-icon.svg" alt="github" />
      </div>

      <Footer />
      </>
  )
}

export default MainPage