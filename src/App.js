import Typewriter from 'typewriter-effect';
import SocialMedia from './social-media/SocialMedia'
import Zoom from 'react-reveal/Zoom';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';

import './App.css';

function App() {

  const [showInfo, setShowInfo] = React.useState(false)
  const text = [
    'Welcome to my GitHub page',
    'You can find me at:'
  ];

  return (
    <div className="App">
      <Box component="span" p={1} m={1} className="my-name-area">
        <Zoom when={showInfo}>
          <h1>Heitor Paceli</h1>
        </Zoom>
      </Box>
      <Box visibility={showInfo ? 'hidden' : 'block'} component="span" className="messages" p={1} m={1} >
        <div className="messages-content">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(40)
                  .changeDeleteSpeed(10)
              text.forEach((str, index) => {
                  typewriter.typeString(str)
                  .pauseFor(1500)
                  .deleteAll()
                  .callFunction(() => {
                    if (index == text.length - 1) {
                      setShowInfo(true);
                    }
                  }).start();
              })
            }}
          />
        </div>
      </Box>
      <Box component="span" className="social-media-area" display="block" p={1} m={1}>
        <Zoom when={showInfo}>
          <SocialMedia />
        </Zoom>
      </Box>
    </div >
  );
}

export default App;
