import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./my-app-bar.css";

const buttons = [
  {
    text: "Home",
    route: "/",
  },
  {
    text: "Follow me",
    route: "/social",
  },
  {
    text: "Blog",
    route: "/blog",
  },
];

function MyAppBar() {
  const location = useLocation();
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Link to="/">
              <Typography variant="h5" color="primary">
                Heitor Paceli
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            {buttons.map((button) => (
              <Button key={button.route} component={Link} to={button.route}>
                <Typography
                  color={
                    location.pathname === button.route
                      ? "textPrimary"
                      : "primary"
                  }
                >
                  {button.text}
                </Typography>
              </Button>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
