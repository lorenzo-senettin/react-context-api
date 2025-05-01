import React from "react";
import { usePosts } from "../contexts/PostsContext";

export default function PostsList() {
  const posts = usePosts();
  return (
    <div>
      <p>postcard component</p>
    </div>
  );
}
