import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import image from './image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Chen's Personal Portfolio
          <ul className="Social-Icons">
            <li><a href="http://instagram.com/mr_chenliang"><i className="fa fa-instagram icon"/></a></li>
            <li><a href="http://twitter.com/mr_chenliang"><i className="fa fa-twitter icon"/></a></li>
            <li><a href="http://linkedin.com/in/mrchenliang"><i className="fa fa-linkedin icon"/></a></li>
            <li><a href="http://github.com/mrchenliang"><i className="fa fa-github icon"/></a></li>
          </ul>
        </p>
        <footer><p>Copyright © Chen Liang 2019</p></footer>
      </header>
    </div>
  );
}

export default App;
