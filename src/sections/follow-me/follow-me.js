import React from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaGooglePlay,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaUniversity,
} from "react-icons/fa";

export default function FollowMe() {
  const links = [
    {
      url: "https://linkedin.com/in/heitorpaceli",
      icon: <FaLinkedin />,
      color: "rgb(0, 127, 177)",
      tooltip: "LinkedIn",
    },
    {
      url: "https://play.google.com/store/apps/developer?id=Paceli+Software",
      icon: <FaGooglePlay />,
      color: "black",
      tooltip: "Play Store",
    },
    {
      url: "https://github.com/heitorpaceli",
      icon: <FaGithub />,
      color: "rgb(36, 41, 46)",
      tooltip: "GitHub",
    },
    {
      url: "https://stackoverflow.com/users/5038317/heitor-paceli",
      icon: <FaStackOverflow />,
      color: "rgb(237, 128, 61)",
      tooltip: "Stack Overflow",
    },
    {
      url: "https://medium.com/@heitorpaceli",
      icon: <FaMedium />,
      color: "rgb(51, 51, 50)",
      tooltip: "Medium",
    },
    {
      url: "https://repositorio.ufpe.br/handle/123456789/20828",
      icon: <FaUniversity />,
      color: "rgb(120, 16, 0)",
      tooltip: "UFPE (University)",
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      spacing={3}
      sx={{ minHeight: "30vh", paddingBottom: "5vh" }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" color="text.primary">
          Follow Me
        </Typography>
      </Grid>
      {links.map((link) => (
        <Grid
          key={link.url}
          container
          item
          xs={12}
          sm={6}
          md={2}
          justifyContent="center"
        >
          <IconContext.Provider value={{ color: link.color, size: "4rem" }}>
            <Tooltip title={link.tooltip} placement="right" arrow>
              <IconButton
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
              >
                {link.icon}
              </IconButton>
            </Tooltip>
          </IconContext.Provider>
        </Grid>
      ))}
    </Grid>
  );
}
