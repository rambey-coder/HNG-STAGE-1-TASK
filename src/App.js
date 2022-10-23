import './App.css';

function App() {
  return (
     <div className="container">
      <div className="header">
      <span>
        <img src="/assets/profile__img.png" alt="profile_img" id="profile_img" />
        <p>Annette Black</p>
      </span>
        <span>
          <img src="/assets/share-icon.svg" alt="share" />
        </span>
      </div>

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

      <div className="footer">
        <img src="/assets/Zuri.png" alt="Zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src="/assets/I4G.png" alt="I4G" />
      </div>
     </div>
  );
}

export default App;
