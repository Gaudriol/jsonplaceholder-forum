import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getPostComments } from "../state/comments/action";
import { postCommentsSelector } from "../state/comments/selector";
import { getPost } from "../state/posts/action";
import { postByIdSelector } from "../state/posts/selector";
import { getUser } from "../state/users/actions";
import { userByIdSelector } from "../state/users/selectors";

import { AuthorLink, Text } from "../components";

const MainTitle = styled("h2")`
  font-size: 1.3rem;
  font-weight: 700;
`;

const Title = styled("h3")`
  font-size: 1.2rem;
  font-weight: 600;
`;

const PostHeader = styled("header")`
  margin-bottom: 24px;
`;

const Wrapper = styled("section")`
  &:not(:first-of-type) {
    margin-top: 48px;
  }
`;

const CommentWrapper = styled("article")`
  margin-top: 16px;
`;

export const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector(postByIdSelector(postId));
  const user = useSelector(userByIdSelector(post?.userId));
  const comments = useSelector(postCommentsSelector(postId));

  useEffect(() => {
    if (!post) {
      dispatch(getPost(postId));
    }
  }, [dispatch, post, postId]);

  useEffect(() => {
    if (!user && post) {
      dispatch(getUser(post.userId));
    }
  }, [dispatch, user, post]);

  useEffect(() => {
    if (!comments) {
      dispatch(getPostComments(postId));
    }
  }, [dispatch, comments, postId]);

  if (!post || !user) {
    return "loading...";
  }

  const { title, body } = post;

  return (
    <>
      <Wrapper>
        <PostHeader>
          <MainTitle>{title}</MainTitle>
          <AuthorLink to={`/users/${user.id}`}>by {user.name}</AuthorLink>
        </PostHeader>
        <p>{body}</p>
      </Wrapper>
      {comments ? (
        <Wrapper>
          <Title>Comments</Title>
          {comments.map(({ body, email, name, id }) => (
            <CommentWrapper key={id}>
              <Text fontWeight="600">{name}</Text>
              <Text fontStyle="italic">by {email}</Text>
              <Text>{body}</Text>
            </CommentWrapper>
          ))}
        </Wrapper>
      ) : (
        "Loading comments..."
      )}
    </>
  );
};
