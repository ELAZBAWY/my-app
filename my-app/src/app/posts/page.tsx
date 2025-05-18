import Link from "next/link";

export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  const posts = await response.json();

  const postItems = posts.map((post) => (
    <Link key={post.id} href={`/Posts/${post.id}`} style={{ width: "70%" }}>
      <div
        key={post.id}
        style={{
          width: "100%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </Link>
  ));
  

  return (
    <div>
      <h1>Posts Page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {postItems}
      </div>
    </div>
  );
}
