export async function getMediumPosts() {
  const mediumFeed = "https://medium.com/feed/@heitorpaceli";
  const rss2Json = "https://api.rss2json.com/v1/api.json";
  return await fetch(`${rss2Json}?rss_url=${mediumFeed}`);
}
