import { getMediumPosts } from "./medium-api";
import otherBlogPosts from "../data/other-posts";

export async function getBlogPosts() {
  try {
    const mediumPosts = await getMediumPosts()
    const allPosts = mediumPosts.concat(otherBlogPosts)
      .sort((o1, o2) => {
        if (o1.date < o2.date) return 1;
        return -1;
      });
    // const allPosts = otherBlogPosts;
    return allPosts;
  } catch (err) {
    return [];
  }
}
