import React from "react";
import Post from "./Post.jsx";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Component } from "react";

function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default Posts;
