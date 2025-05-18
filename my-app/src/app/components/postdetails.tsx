export default async function PostDetails({ postId }) {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const post = await response.json();
  return (
    <div>
      <div
        style={{
          width: "70%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h1>{post.title}</h1>
        <hr></hr>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
