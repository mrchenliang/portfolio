
import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.css';
import Typist from 'react-typist';

import { ParticleComponent } from "../../components/particles/ParticleComponent.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import image from '../../assets/headshot.png';
import Footer from "../../components/footer/footer.component";

import './home.styles.css';


const Home = () => {

    const [darkMode, setDarkMode] = useState(getInitialMode())  
    const [count, setCount] = useState(1);

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

    useEffect(() => {
      setCount(1);
    }, [count]);

    useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);
  
  
    function getPrefColorScheme() {
      if(!window.matchMedia) return;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return (
      <div className={`home-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <ParticleComponent backgroundColor={darkMode ?  '#333' : '#fff'} color={darkMode ?  '#fff' : '#333'}/>
        <header className="home-header">
        <div className = "home-content">
          <span className = 'toggle'>
            <span onClick={() => setDarkMode(prevMode => !prevMode)}>{darkMode ? '☀️' : '🌚'}</span>
          </span>
          <div className = 'header'>
          <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={700} transitionEnterTimeout={700} transitionLeaveTimeout={700}>
            <img src={image} className="headshot" alt="logo" />
          </ReactCSSTransitionGroup>
            <div className = 'info'>
              <div>Hello | 你好
                <div>
                  My name is <b> Chen Liang</b>
                </div>
              </div>
              <div className = 'title'>I am a &nbsp;
              {count ? (
              <Typist avgTypingDelay={50} onTypingDone={() =>  setTimeout(setCount(0), 3000)}>
                <b>
                  <span>Software Engineer <span role="img" aria-label="Gear"> ⚙️</span></span>
                  <Typist.Backspace count={25} delay={800} />
                  <span>Full Stack Developer <span role="img" aria-label="Compuer"> 💻</span></span>
                  <Typist.Backspace count={25} delay={1600} />
                  <span>Coding BootCamp Mentor <span role="img" aria-label="Mentor"> 👨‍🏫</span></span>
                </b>
              </Typist>
              ) : (
                ""
              )}
          </div>
            <div className = 'location'><i className="fa fa-map-marker pin"/>
              Toronto <span role="img" aria-label="Canada">  🇨🇦</span> / 
              New York <span role="img" aria-label="USA">  🇺🇸 </span>
            </div>
          </div>
            <div className = 'about'>
                My passion is to work with talented individuals and solve complex problems with simple, elegant solutions.
              <br/>
                In my career, I have sought out diverse opportunities to apply my technical skills.
              <br/>
                {/* I am in the pursuit of finding long-term sustainable happiness. <span role="img" aria-label="Cloud">  ☁️ </span> */}
            </div>
            <div className = 'hobbies'>
              I also enjoy: 
              <span role="img" aria-label="Tech"> 💻 |</span>
              {/* <span role="img" aria-label="Beer"> 🍺 | </span> */}
              <span role="img" aria-label="Basketball"> 🏀 |</span> 
              <span role="img" aria-label="Traveling"> ✈️ |</span> 
              <span role="img" aria-label="Coffee"> ☕️</span>
            </div>
          </div>
          </div>
        <Footer darkMode = {darkMode}/>
        </header>
      </div>
    );
};

export default Home;
