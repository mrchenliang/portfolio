import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import image from './image.jpg';
import './App.css';
import ParticleComponent from "./ParticleComponent";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ParticleComponent />
        <p>
        <div className = 'header'>
          <img src={image} className="App-logo" alt="logo" />
          <div className = 'info'>
            <div>Hello | 你好
              <div>
                My name is <b> Chen Liang</b>
              </div>
            </div>
            <div className = 'title'>Software Engineer | Full Stack Developer</div>
            <div className = 'location'><i className="fa fa-map-marker pin"/>Toronto <span role="img" aria-label="Canada">  🇨🇦</span></div>
          </div>
          <div className = 'about'>
            I'm a 25-year-old, Chinese-Canadian.
            <br/>
            My passion is to work with talented individuals and solve complex problems with simple, elegant solutions.
            <br/>
            In my career, I have sought out diverse opportunities to apply my technical skills.
          </div>
          <div className = 'hobbies'>
          I also enjoy: 
            <span role="img" aria-label="Tech"> 💻 |</span>
            <span role="img" aria-label="Beer"> 🍺 | </span>
            <span role="img" aria-label="Basketball"> 🏀 |</span> 
            <span role="img" aria-label="Coffee"> ☕️</span>
          </div>

          <ul className="Social-Icons">
            <li>
              <div>
                <a href="mailto:c.liang@ualberta.ca" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope icon tooltip"><div className = 'tooltiptext'>Email</div></i>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="http://instagram.com/mr_chenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram icon tooltip"><div className = 'tooltiptext'>Instagram</div></i></a>              
              </div>
            </li>
            <li>
              <div>
                <a href="http://twitter.com/mr_chenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter icon tooltip"><div className = 'tooltiptext'>Twitter</div></i></a>              
              </div>
            </li>
            <li>
              <div>
                <a href="http://linkedin.com/in/mrchenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon tooltip"><div className = 'tooltiptext'>LinkedIn</div></i></a>              
              </div>
            </li>
            <li>
              <div>
                <a href="http://github.com/mrchenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon tooltip"><div className = 'tooltiptext'>Github</div></i></a>              
              </div>
            </li>
            {/* <li>
              <div>
                <a href="/portfolio/Chen_Liang_Resume.pdf" rel="noopener noreferrer" target="_blank"><i className="fa fa-file icon tooltip"><div className = 'tooltiptext'>Resume</div></i></a>              
              </div>
            </li> */}
          </ul>
          </div>
        </p>
        <footer>
          <p>Copyright © Chen Liang 2020</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
