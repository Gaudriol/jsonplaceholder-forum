import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../state/posts/action";
import { postByIdSelector } from "../state/posts/selector";
import { getUser } from "../state/users/actions";
import { userByIdSelector } from "../state/users/selectors";

export const PostDetails = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector(postByIdSelector(postId));
  const user = useSelector(userByIdSelector(post?.userId));

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

  if (!post || !user) {
    return "loading...";
  }

  const { title, body } = post;

  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </section>
  );
};
