import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import image from './image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <div className = 'header'>
          <img src={image} className="App-logo" alt="logo" />
          <div className = 'info'>
            <div>Chen Liang</div>
            <div>Software Engineer | Full Stack Developer</div>
            <div> Toronto <span role="img" aria-label="Canada"> 🇨🇦</span></div>
          </div>
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
            <li>
              <div>
                <a href="http://chenliang.ca/resume" rel="noopener noreferrer" target="_blank"><i className="fa fa-file icon tooltip"><div className = 'tooltiptext'>Resume</div></i></a>              
              </div>
            </li>
          </ul>
        </p>
        <footer><p>Copyright © Chen Liang 2020</p></footer>
      </header>
    </div>
  );
}

export default App;
