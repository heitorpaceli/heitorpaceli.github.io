import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import BlogPost from "../../components/blog-post/blog-post";
import { getBlogPosts } from "../../api/blog-api";
import MyDivider from "../../components/my-divider/my-divider";
import "./home.css";

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getBlogPosts()
      .then((res) => {
        const posts = res;
        const visiblePosts = 3;
        setRecentPosts(posts.slice(0, visiblePosts));
      })
      .catch((err) => setRecentPosts([]));
  }, []);

  const fadeSides = [{ left: true }, { right: true }];
  const fadeDelay = 400;

  return (
    <Grid container spacing={1} className="h100 home">
      <Grid item xs={12} md={6}>
        <Grid
          className="h100"
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography color="primary" variant="h2">
              Heitor Paceli Maranhão
            </Typography>
            <MyDivider />
          </Grid>
          <Grid item>
            <Typography color="textPrimary">
              Master of Science in Computer Science
            </Typography>
            <Typography color="textPrimary">Software Engineer</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        {recentPosts.length > 0 ? (
          <Grid
            className="h100"
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
          >
            {recentPosts.map((post, index) => (
              <Grid item key={post.link}>
                <Fade
                  {...fadeSides[index % fadeSides.length]}
                  delay={index * fadeDelay}
                >
                  <BlogPost post={post} height="20vh" />
                </Fade>
              </Grid>
            ))}
            <Grid item className="w100">
              <Fade
                {...fadeSides[recentPosts.length % fadeSides.length]}
                delay={recentPosts.length * fadeDelay}
              >
                <Button
                  component={Link}
                  to="/blog"
                  className="w100"
                  variant="contained"
                  color="primary"
                >
                  See more
                </Button>
              </Fade>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
}
