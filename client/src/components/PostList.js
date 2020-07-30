import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const post = await axios.get("joshuadavids.herokuapp.com/posts/");
    setPosts(post.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  //   i = itteration
  const displayList = () => {
    return posts.map((post, i) => {
      return (
        <ul>
          <Link to={`/posts/${post._id}`} key={i}>
            <p className="inner">{post.title}</p>
          </Link>
        </ul>
      );
    });
  };

  return (
    <div className="main">
      <h1 className="header">Posts</h1>
      <div className="postlist">{displayList()}</div>
    </div>
  );
};

export default PostList;
