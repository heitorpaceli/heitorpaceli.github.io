import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import './SocialMedia.css';

function SocialMedia() {
    return (
        <div className="social-media-icons">
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                    <a href="https://github.com/heitorpaceli" target="_blank">
                        <FaGithub className='social-media-icons' />
                    </a>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <a href="https://linkedin.com/in/heitorpaceli" target="_blank">
                        <FaLinkedin className='social-media-icons' />
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default SocialMedia;
