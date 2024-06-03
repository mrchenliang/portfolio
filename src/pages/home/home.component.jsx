
import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import image from '../../assets/headshot.png';
import Name from "../../components/name/name.component";
import Footer from "../../components/footer/footer.component";
import { getInitialMode } from '../../helpers/darkmode.helpers';

import 'font-awesome/css/font-awesome.css';
import './home.styles.css';

const Home = () => {
    const [darkMode, setDarkMode] = useState(getInitialMode())  
    const [count, setCount] = useState(1);

    useEffect(() => {
      setCount(1);
    }, [count]);

    useEffect(() => {
      localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
      <div className={`home-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
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
                  <Name />
                </div>
              </div>
              <div className = 'title'>I am a&nbsp;
              {count ? (
              <Typist avgTypingDelay={50} onTypingDone={() =>  setTimeout(setCount(0), 3200)}>
                <b>
                  <span>Senior Software Engineer <span role="img" aria-label="Gear"> ⚙️</span></span>
                  <Typist.Backspace count={28} delay={1200} />
                  <span>Sessional Course Instructor <span role="img" aria-label="Books"> 📚</span></span>
                  <Typist.Backspace count={31} delay={1800} />
                  <span>Career Mentor <span role="img" aria-label="Mentor"> 👨‍🏫</span></span>
                </b>
              </Typist>
              ) : null}
          </div>
            <div className = 'location'><i className="fa fa-map-marker pin"/>
              Toronto <span role="img" aria-label="Canada">  🇨🇦</span> / 
              New York <span role="img" aria-label="USA">  🇺🇸 </span>
            </div>
          </div>
            <div className='about'>
                I am energetic, adaptable, and endlessly curious about the world around us; I bring this passion to solving complex problems with simple, elegant solutions.
              {/* <br/>
                In my career, I have sought out diverse opportunities to apply my technical skills. */}
              <br/>
              <br/>
                Amid the fast pace of our world, I am also in the pursuit of finding long-term sustainable happiness. <span role="img" aria-label="Cloud">  ☁️ </span>
            </div>
            <div className='hobbies'>
              A few of my hobbies: 
              <span role="img" aria-label="Tech"> 💻 |</span>
              {/* <span role="img" aria-label="Beer"> 🍺 | </span> */}
              <span role="img" aria-label="Snowboard"> 🏂 | </span>
              <span role="img" aria-label="Basketball"> 🏀 |</span> 
              <span role="img" aria-label="Traveling"> ✈️ |</span> 
              <span role="img" aria-label="Coffee"> ☕️</span>
            </div>
          </div>
          </div>
        <Footer darkMode={darkMode}/>
        </header>
      </div>
    );
};

export default Home;
