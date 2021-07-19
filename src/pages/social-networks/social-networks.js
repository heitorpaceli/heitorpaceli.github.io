import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaMedium,
  FaGooglePlay,
  FaUniversity,
} from "react-icons/fa";
import React from "react";
import Grid from "@material-ui/core/Grid";

import "./social-networks.css";

const media = [
  {
    url: "https://github.com/heitorpaceli",
    icon: <FaGithub />,
    site: "GitHub",
  },
  {
    url: "https://linkedin.com/in/heitorpaceli",
    icon: <FaLinkedin className="social-media-icons" />,
    site: "LinkedIn",
  },
  {
    url: "https://stackoverflow.com/users/5038317/heitor-paceli",
    icon: <FaStackOverflow />,
    site: "Stack Overflow",
  },
  {
    url: "https://medium.com/@heitorpaceli",
    icon: <FaMedium />,
    site: "Medium",
  },
  {
    url: "https://play.google.com/store/apps/developer?id=Paceli+Software",
    icon: <FaGooglePlay />,
    site: "Google Play",
  },
  {
    url: "https://repositorio.ufpe.br/handle/123456789/20828",
    icon: <FaUniversity />,
    site: "UFPE",
  },
];

function SocialMedia() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="social-media-items"
      spacing={3}
    >
      {media.map((item) => (
        <Grid item xs={12} md={4} key={item.site} className="social-media-item">
          <Grid container direction="row" justify="center" alignItems="center">
            <a href={item.url} target="_blank">
              <Grid item xs={12} className="social-media-icons">
                {item.icon}
              </Grid>
              <Grid item xs={12}>
                {item.site}
              </Grid>
            </a>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
export default SocialMedia;
