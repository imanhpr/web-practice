import React from "react";
import PostForm from "../components/PostForm";

function CreatePostPage() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PostForm />
      </div>
    </React.Fragment>
  );
}
export default CreatePostPage;
