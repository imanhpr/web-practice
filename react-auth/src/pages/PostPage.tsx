import React from "react";
import { useParams, Link } from "react-router-dom";

function PostPage() {
  const { post_id } = useParams();
  return (
    <React.Fragment>
      <div>
        <Link to="/">back</Link>
      </div>
      <h2>Post: {post_id}</h2>
    </React.Fragment>
  );
}

export default PostPage;
