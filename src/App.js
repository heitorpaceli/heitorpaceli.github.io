import Typewriter from 'typewriter-effect';
import SocialMedia from './social-media/SocialMedia'
import Zoom from 'react-reveal/Zoom';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';

import './App.css';

function App() {

  const [showInfo, setShowInfo] = React.useState(false)

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
              typewriter.changeDelay(20)
              typewriter.pauseFor(1800)
                .typeString('Welcome to my GitHub page')
                .pauseFor(2000)
                .callFunction(() => {
                  setShowInfo(true);
                }).start();
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