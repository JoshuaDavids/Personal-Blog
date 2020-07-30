import React, { useState, useEffect, Fragment } from "react";
import Markdown from "markdown-it";
import axios from "axios";

const Post = (props) => {
  const markdown = new Markdown();
  const [post, setPost] = useState();

  const getPost = async () => {
    const res = await axios.get(`/posts/post/${props.match.params.id}`);
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  });

  const displayText = () => {
    return markdown.render(post.markdown);
  };

  const showPost = () => {
    return (
      <Fragment>
        <div className="title-container">
          <h1 className="title">{post.title}</h1>
        </div>
        <div
          className="post-text"
          dangerouslySetInnerHTML={{ __html: displayText() }}
        ></div>
      </Fragment>
    );
  };

  return <div className="post">{post ? showPost() : null}</div>;
};

export default Post;
