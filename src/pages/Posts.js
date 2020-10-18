import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostItem } from "../components/PostItem";

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

  const getUserProp = useCallback(
    (userId) => {
      const user = users.find(({ id }) => {
        return id === userId;
      });
      return user;
    },
    [users]
  );

  if (!posts || !users) {
    return "loading...";
  }

  return (
    <section>
      {posts.map(({ title, id, userId }) => (
        <PostItem title={title} key={id} user={getUserProp(userId)} />
      ))}
    </section>
  );
};
