import React from "react";
import Comment from "./Comment.jsx";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Component } from "react";

function Comments(props) {
  return (
    <div>
      <div style={{ maxWidth: 350, margin: "auto" }}>
        <h5 style={{ margin: "30px auto 10px" }}>Comments</h5>
      </div>
      {props.comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          postId={comment.postId}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
}

export default Comments;
