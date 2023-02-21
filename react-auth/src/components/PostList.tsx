import { useEffect, useState } from "react";
import { Post as PostInterFace } from "../publicInterFace";
import Post from "./Post";

import React from "react";

function PostList() {
  const [posts, setPosts] = useState<PostInterFace[]>([]);
  const getPosts = async () => {
    const url = "http://localhost:8000/post";
    const response = await fetch(url);
    const data = (await response.json()) as PostInterFace[];
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const renderedPosts = posts.map((value) => {
    return <Post key={value.id} data={value} />;
  });
  return (
    <React.Fragment>
      <div
        style={{
          margin: "12px 0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {renderedPosts}
      </div>
    </React.Fragment>
  );
}

export default PostList;
