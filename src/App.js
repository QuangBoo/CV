import './App.scss';
function App() {
  return (
    <div className="App">
      <div className="resume">
  <div className="base">
    <div className="profile">
      <div className="photo">
        
        <i className="fas fa-rocket"></i>
      </div>
      <div className="info">
        <h1 className="name">Pham Minh Quang</h1>
        <h2 className="job">Frontend Web Designer</h2>
      </div>
    </div>
    <div className="about">
      <h3>About Me</h3>I'm a final year student of UIT. Experienced in HTML, CSS, JavaScript and personal projects
    </div>
    <div className="contact">
      <h3>Contact Me</h3>
      <div className="call"><a href="tel:123-456-7890"><i className="fas fa-phone"></i><span>123-456-7890</span></a></div>
      <div className="address"><a href="https://goo.gl/maps/fiTBGT6Vnhy"><i className="fas fa-map-marker"></i><span>Ho Chi Minh City</span></a>
      </div>
      <div className="email"><a href="mailto:quangcun1404@gmail.com"><i className="fas fa-envelope"></i><span>quangcun1404</span></a></div>
    </div>
    <div className="follow">
      <h3>Follow Me</h3>
      <div className="box">
        <a href="https://www.facebook.com/QuangCun2001/" target=""><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/pmq.1404/" target=""><i className="fab fa-instagram "></i></a>
    
      </div>
    </div>
  </div>
  <div className="func">
    <div className="work">
      <h3><i className="fa fa-briefcase"></i>Project</h3>
      <ul>
        <li><span>QSTT Website<br/>Web Design</span><small>Teamwork</small><small>Apr 2020</small></li>
        <li><span>Apple Demo</span><small>Web Sales</small><small>Oct 2022 - Now</small></li>
      </ul>
    </div>
    <div className="edu">
      <h3><i className="fa fa-graduation-cap"></i>Education</h3>
      <ul>
        <li><span>UIT<br/>Final Year Student</span><small>Information System</small><small>Aug. 2019 - Now</small></li>
        <li><span>High School</span><small>Tam Phu High School</small><small>Aug. 2016 - Jun. 2019</small></li>
      </ul>
    </div>
    
    <div className="skills-soft">
      <h3><i className="fas fa-bezier-curve"></i>Skills</h3>
      <ul>
        <li data-percent="90">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>HTML</span><small></small>
        </li>
        <li data-percent="75">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>CSS</span><small></small>
        </li>
        <li data-percent="85">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>JavaScript</span><small></small>
        </li>
        <li data-percent="65">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>SQL</span><small></small>
        </li>
      </ul>
    </div>
    <div className="interests">
      <h3><i className="fas fa-star"></i>Interests</h3>
      <div className="interests-items">
        <div className="art"><i className="fas fa-palette"></i><span>Art</span></div>
        <div className="art"><i className="fas fa-book"></i><span>Books</span></div>
        <div className="movies"><i className="fas fa-film"></i><span>Movies</span></div>
        <div className="music"><i className="fas fa-headphones"></i><span>Music</span></div>
        <div className="games"><i className="fas fa-gamepad"></i><span>Games</span></div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
