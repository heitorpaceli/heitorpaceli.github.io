import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RecentArticle from "../../components/recent-article/recent-article";
import { getBlogPosts } from "../../api/blog-api";

export default function RecentArticles() {
  const theme = useTheme();
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(posts);

  useEffect(() => {
    getBlogPosts()
      .then((res) => {
        const fetchedPosts = res;
        setPosts(fetchedPosts);
      })
      .catch((err) => setPosts([]));
  }, []);

  useEffect(() => {
    posts.sort((p1, p2) => {
      if (p1.disabled && p2.disabled) {
        return 0
      } else if (p1.disabled) {
        return 1
      } else {
        return -1
      }
    })
    const maxRecent = 3
    const availablePosts = posts.filter((post, index) =>
      index < maxRecent && !post.disabled
    )
    if (availablePosts.length > 0) {
      setVisiblePosts(availablePosts);
    } else {
      setVisiblePosts(posts.filter((post, index) => index < maxRecent));
    }
  }, [posts, setVisiblePosts]);

  const seeAllPosts = () => setVisiblePosts(posts);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: theme.palette.background.default,
        marginTop: "3vh",
        paddingBottom: "3vh",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" color="text.primary">
          Articles
        </Typography>
      </Grid>
      {visiblePosts.map((post) => (
        <Grid
          key={post.link}
          container
          item
          sm={12}
          md={4}
          justifyContent="center"
        >
          <RecentArticle article={post} />
        </Grid>
      ))}
      {posts === visiblePosts ? (
        <></>
      ) : (
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={seeAllPosts}
          >
            See all
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
