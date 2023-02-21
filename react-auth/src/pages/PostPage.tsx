import React from "react";
import { useParams, Link } from "react-router-dom";
import PostList from "../components/PostList";

function PostPage() {
  return (
    <React.Fragment>
      <PostList />
    </React.Fragment>
  );
}

export default PostPage;
