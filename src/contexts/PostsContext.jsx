import React, { createContext, useContext } from "react";

const PostsContext = createContext();

export const PostsProvider = ({ posts, children }) => (
  <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
);

export const usePosts = () => {
  const posts = useContext(PostsContext);
  return posts;
};
