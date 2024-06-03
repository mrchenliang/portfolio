import React from 'react';
import audio from '../../assets/name.mp3';

const Name = () => {
  const start = () => {
    new Audio(audio).play();
  }

  return (
    <div>
      My name is<b>&nbsp;Chen Liang&nbsp;</b>
      <span className="audio" role="img" onClick={start} aria-label="Snowboard">
        🔊
      </span>
    </div>
  );
};

export default Name;              
