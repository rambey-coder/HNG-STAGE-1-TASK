import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainPage = () => {
  return (
    <>
      <Header />

    <div className="links">
        <a href="https://twitter.com/Rambeybello">Twitter Link</a>
        <a href="https://training.zuri.team/">Zuri Team</a>
        <a href="http://books.zuri.team">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<rambey>">Python Books</a>
        <a href="https://background.zuri.team">Background Checker for Coders</a>
        <a href="https://books.zuri.team/design-rules ">Design Books</a>
      </div>

      <div className="account">
        <a href="https://rambey.slack.com" id='slack'>
          <img src="/assets/slack-icon.svg" alt="slack" />
        </a>

        <a href="#!https://github.com/rambey-coder" id='github'>
          <img src="/assets/github-icon.svg" alt="github" />
        </a>
      </div>

      <Footer />
      </>
  )
}

export default MainPage