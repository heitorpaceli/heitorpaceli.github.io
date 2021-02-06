import TypeWriterEffect from 'react-typewriter-effect';
import SocialMedia from './social-media/SocialMedia'
import Zoom from 'react-reveal/Zoom';
import React, { useState } from 'react';

import './App.css';

function App() {

  const [showInfo, setShowInfo] = React.useState(false)
  const text = [
    'Welcome to my GitHub page',
    'It is under development',
    'You can find me at:'
  ];
  const nextTextDelay = 1000;
  const startDelay = 1000;
  const speed = 30;
  const characters = text.join('').length;
  console.log('char ' + characters)
  const timeout = startDelay + (nextTextDelay * text.length) + (speed * 3 * characters);

  if (!showInfo) {
    setTimeout(() => {
      setShowInfo(true);
    }, timeout);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Zoom when={showInfo}>
          <h1>Heitor Paceli</h1>
        </Zoom>
        <TypeWriterEffect
          textStyle={{
            color: '#4fc289'
          }}
          startDelay={startDelay}
          cursorColor="#4fc289"
          multiText={text}
          loop={false}
          nextTextDelay={nextTextDelay}
          typeSpeed={speed}
        />
        <div className="social-media-area">
          <Zoom when={showInfo}>
            <SocialMedia />
          </Zoom>
        </div>
      </header>
    </div>
  );
}

export default App;
