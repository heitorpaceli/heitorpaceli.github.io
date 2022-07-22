import { getMediumPosts } from "./medium-api";
import otherBlogPosts from "../data/other-posts";

export async function getBlogPosts() {
  try {
    const mediumPosts = await (await getMediumPosts()).json();
    return mediumPosts.items
      .map((post) => {
        return {
          title: post.title,
          image: post.thumbnail,
          link: post.link,
          // Change to ISO format before, otherwise won't work in Safari
          date: new Date(post.pubDate.replace(" ", "T")),
          description: post.description,
        };
      })
      .concat(otherBlogPosts)
      .sort((o1, o2) => {
        if (o1.date < o2.date) return 1;
        return -1;
      });
  } catch (err) {
    return [];
  }
}
