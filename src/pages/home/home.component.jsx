
import React from 'react';
import 'font-awesome/css/font-awesome.css';
import image from '../../assets/image.jpeg';
import './home.styles.css';
import ParticleComponent from "../../components/particles/ParticleComponent";


const Home = () => {

    const year = new Date().getFullYear();

    const [darkMode, setDarkMode] = React.useState(getInitialMode())  
    React.useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);
    
    function getInitialMode() {
      const isReturningUser = 'dark' in localStorage;
      const savedMode = JSON.parse(localStorage.getItem('dark'));
      const userPrefersDark = getPrefColorScheme();
      // if mode was saved -> dark / light
      if(isReturningUser) {
        return savedMode;
        // if preferred color scheme is dark -> dark
      } else if (userPrefersDark) {
        return true;
        // otherwise -> light
      } else {
        return false;
      }
    }
  
    function getPrefColorScheme() {
      if(!window.matchMedia) return;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return (
      <div className={"home-page", `${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <header className="home-header">
        <ParticleComponent color={darkMode ?  '#fff' : '#333'}/>
          <p className>
            <span className = 'toggle'>
              <span onClick={() => setDarkMode(prevMode => !prevMode)}>{darkMode ? '☀️' : '🌚'}</span>
            </span>
          <div className = 'header'>
            <img src={image} className="headshot" alt="logo" />
            <div className = 'info'>
              <div>Hello | 你好
                <div>
                  My name is <b> Chen Liang</b>
                  <div className = 'toggle-container'>
  
                  </div>
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
                  <a href="mailto:hi@chenliang.ca" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope icon tooltip" style ={{color: darkMode ? '#fff' : '#333', border : darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"background-color": darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff'}}>Email</div></i>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a href="http://instagram.com/mr_chenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram icon tooltip" style ={{color: darkMode ? '#fff' : '#333', border : darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"background-color": darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff'}}>Instagram</div></i></a>              
                </div>
              </li>
              <li>
                <div>
                  <a href="http://twitter.com/mr_chenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter icon tooltip" style ={{color: darkMode ? '#fff' : '#333', border : darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"background-color": darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff'}}>Twitter</div></i></a>              
                </div>
              </li>
              <li>
                <div>
                  <a href="http://medium.com/@chen.liang" rel="noopener noreferrer" target="_blank"><i className="fa fa-medium icon tooltip" style ={{color: darkMode ? '#fff' : '#333', border : darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"background-color": darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff'}}>Medium</div></i></a>              
                </div>
              </li>
              <li>
                <div>
                  <a href="http://linkedin.com/in/mrchenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin icon tooltip" style ={{color: darkMode ? '#fff' : '#333', border : darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"background-color": darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff'}}>LinkedIn</div></i></a>              
                </div>
              </li>
              <li>
                <div>
                  <a href="http://github.com/mrchenliang" rel="noopener noreferrer" target="_blank"><i className="fa fa-github icon tooltip" style ={{color: darkMode ? '#fff' : '#333', border : darkMode ? '#fff 3px solid': '#333 3px solid'}}><div className = 'tooltiptext' style ={{"background-color": darkMode ? '#fff' : '#333', color: darkMode ? '#333' : '#fff'}}>Github</div></i></a>              
                </div>
              </li>
              {/* <li>
                <div>
                  <a href="/resume.pdf" rel="noopener noreferrer" target="_blank"><i className="fa fa-file icon tooltip"><div className = 'tooltiptext'>Resume</div></i></a>              
                </div>
              </li> */}
            </ul>
            </div>
          </p>
          <footer>
            <p>Copyright © Chen Liang {year}</p>
          </footer>
        </header>
      </div>
    );
};

export default Home;
