import React from "react";
import { Route, Switch } from "react-router-dom";
import MyAppBar from "./components/my-app-bar/my-app-bar";
import Home from "./pages/home/home";
import SocialMedia from "./pages/social-networks/social-networks";
import PageNotFound from "./pages/not-found/page-not-found";
import Blog from "./pages/blog/blog";
import "./App.css";

function App() {
  return (
    <div>
      <MyAppBar />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/social" component={SocialMedia} />
          <Route path="/blog" component={Blog} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
