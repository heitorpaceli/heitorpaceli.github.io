import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import './SocialMedia.css';

function SocialMedia() {
    return (
        <Grid container spacing={1}>
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
            <Grid item xs={12} sm={12} className="old-page-link">
                Or at my old page <a href="https://sites.google.com/site/heitorpaceli" target="_blank">
                    https://sites.google.com/site/heitorpaceli
                </a>
            </Grid>
        </Grid>
    );
}

export default SocialMedia;
