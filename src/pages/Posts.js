import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { readPosts } from "../state/posts/action";
import { postsSelector } from "../state/posts/selector";
import { readUsers } from "../state/users/actions";
import { usersSelector } from "../state/users/selectors";

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);
  const users = useSelector(usersSelector);

  useEffect(() => {
    if (!posts) {
      dispatch(readPosts());
    }
  }, [dispatch]);

  useEffect(() => {
    if (!users) {
      dispatch(readUsers());
    }
  }, [dispatch]);


  if (!posts || !users) {
    return "loading...";
  }

  return (
    <section>
      {posts.map(({ title, id, userId }) => (
        <article key={id}>
          <Link to={`/posts/${id}`}>{title}</Link>
        </article>
      ))}
    </section>
  );
};
