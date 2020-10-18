import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

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

import { PageTitle, PostItem, Pagination } from "../components";
import { paginateData } from "../utils/paginateData";

const PostsWrapper = styled("div")`
  margin-bottom: 64px;
`;

export const Posts = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

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

  const [paginatedPosts, totalPages] = paginateData(posts, currentPage);

  return (
    <section>
      <PostsWrapper>
        <header>
          <PageTitle>All posts</PageTitle>
        </header>
        {paginatedPosts.map(({ title, id, body, userId }) => (
          <PostItem
            title={title}
            body={body}
            id={id}
            key={id}
            user={getUserProp(userId)}
          />
        ))}
      </PostsWrapper>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};
