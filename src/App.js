import React from "react";
import Main from "./sections/main/main";
import "./App.css";
import { Container } from "@mui/system";
import RecentArticles from "./sections/recent-articles/recent-articles";
import FollowMe from "./sections/follow-me/follow-me";

function App() {
  return (
    <>
      <Main />
      <Container fixed maxWidth="md">
        <RecentArticles />
        <hr />
        <FollowMe />
      </Container>
    </>
  );
}

export default App;
