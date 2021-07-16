import { getMediumPosts } from "./medium-api";

export async function getBlogPosts() {
  try {
    const posts = await (await getMediumPosts()).json();
    return posts.items.map((post) => {
      return {
        title: post.title,
        image: post.thumbnail,
        link: post.link,
        date: post.pubDate,
        description: post.description,
      };
    });
  } catch (err) {
    return [];
  }
}
