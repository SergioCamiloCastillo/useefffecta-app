import React, { useState, useEffect, useCallback } from "react";
import getPosts from "./helpers/getPosts";
import getUser from "./helpers/getUser";

export default function FetchCard() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const updateUser = () => {
    const userId = Math.floor(Math.random() * 10) + 1;
    getUser(userId).then((newUser) => {
      setUser(newUser);
    });
  };
  const updatePosts = useCallback(() => {
    getPosts(user.id).then((newPosts) => {
      setPosts(newPosts);
    });
  }, [user.id]);

  useEffect(() => {
    updateUser();
  }, []);
  useEffect(() => {
    if (user?.id) {
      updatePosts();
    }
  }, [user,updatePosts]);

  return (
    <div>
      <button onClick={updateUser}>Another User</button>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <br />
      <h2>Post - User:</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
