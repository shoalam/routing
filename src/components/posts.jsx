import React from "react";

const Posts = (props) => {
  return (
    <div>
      <h1>This is posts page</h1>
      <span>Year: {props.match.params.year}</span>
      <br />
      <span>Month: {props.match.params.month}</span>
    </div>
  );
};

export default Posts;
