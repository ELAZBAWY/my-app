import PostDetails from "@/app/components/postdetails";
import { Suspense } from "react";
export default async function PostDetailsPage({ params }) {
  const postId = params.postId;

  const loading = (
    <div>
      <h1>Loading...</h1>
    </div>
  )
  return (
    <div style={{ padding: "20px" }}>
      <h1>Post Details</h1>
      <Suspense fallback={loading}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}