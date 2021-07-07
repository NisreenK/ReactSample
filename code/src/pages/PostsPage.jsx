import React from "react";
import { useState, useEffect, useContext } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";
import Posts from "../components/Posts.jsx";

import { makeStyles } from "@material-ui/core/styles";

import LoginContext from "../contexts/LoginContext.jsx";
import AddPost from "../components/AddPost.jsx";
import { createContext } from "react";

async function fetchPostsJSON() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

function PostsPage() {
  //const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  const ctx = useContext(LoginContext);

  //console.log(ctx.newpsts);

  fetchPostsJSON().then((data) => {
    const posts = [];
    for (const key in data) {
      const post = {
        id: key,
        ...data[key],
      };
      if (post.userId == ctx.uid) posts.push(post);
    }

    //setIsLoading(false);
    setLoadedPosts(posts);
  });

  return (
    <>
      <CssBaseline />
      <div
        style={{
          backgroundColor: "#cfe8fc",
          padding: "10px",

          minHeight: "100vh",
        }}
      >
        <AddPost></AddPost>

        <div style={{ maxWidth: 400, margin: "auto" }}>
          <h3>Posts</h3>
        </div>

        <Posts posts={ctx.newpsts}></Posts>
        <Posts posts={loadedPosts}></Posts>
      </div>
    </>
  );
}

export default PostsPage;
