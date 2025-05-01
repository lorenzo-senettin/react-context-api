import { useState } from "react";
import PostsPage from "./components/PostsPage.jsx";
import { PostsProvider } from "./contexts/PostsContext.jsx";
import { postsData } from "./data/data";

function App() {
  return (
    <>
      <PostsProvider posts={postsData}>
        <PostsPage />
      </PostsProvider>
    </>
  );
}

export default App;
