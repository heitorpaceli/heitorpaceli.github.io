import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { getBlogPosts } from "../../api/blog-api";
import MyDivider from "../../components/my-divider/my-divider";
import BlogPost from "../../components/blog-post/blog-post";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts()
      .then((res) => {
        const fetchedPosts = res;
        setPosts(fetchedPosts);
      })
      .catch((err) => setPosts([]));
  }, []);

  return (
    <div>
      <Typography variant="h4" color="primary">
        Blog
      </Typography>
      <MyDivider />
      <Grid container spacing={1}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.link}>
            <BlogPost post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
