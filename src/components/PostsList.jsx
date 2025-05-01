import React from "react";
import { usePosts } from "../contexts/PostsContext";
import PostCard from "./PostCard.jsx";

export default function PostsList() {
  const posts = usePosts();
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
