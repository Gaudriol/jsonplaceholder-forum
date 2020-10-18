import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostItem } from "../components/PostItem";

import { readPosts } from "../state/posts/action";
import {
  postsSelector,
  hasFullListPostsSelector,
} from "../state/posts/selector";
import { readUsers } from "../state/users/actions";
import {
  usersSelector,
  hasFullListUsersSelector,
} from "../state/users/selectors";

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);
  const users = useSelector(usersSelector);
  const hasFullListPosts = useSelector(hasFullListPostsSelector);
  const hasFullListUsers = useSelector(hasFullListUsersSelector);

  const hasFullList = hasFullListPosts && hasFullListUsers;

  useEffect(() => {
    if (!hasFullListPosts) {
      dispatch(readPosts());
    }
  }, [dispatch, hasFullListPosts]);

  useEffect(() => {
    if (!hasFullListUsers) {
      dispatch(readUsers());
    }
  }, [dispatch, hasFullListUsers]);

  const getUserProp = useCallback(
    (userId) => {
      const user = users.find(({ id }) => {
        return id === userId;
      });
      return user;
    },
    [users]
  );

  if (!hasFullList) {
    return "Loading...";
  }

  return (
    <section>
      {posts.map(({ title, id, userId }) => (
        <PostItem title={title} key={id} user={getUserProp(userId)} />
      ))}
    </section>
  );
};
