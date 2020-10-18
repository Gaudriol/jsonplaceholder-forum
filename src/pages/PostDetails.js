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
      {comments ? (
    <section>
          <h2>Comments</h2>
          {comments.map(({ body, email, name, id }) => (
            <article key={id}>
              <p>{name}</p>
              <p>by {email}</p>
      <p>{body}</p>
            </article>
          ))}
    </section>
      ) : (
        "Loading comments..."
      )}
  );
};
