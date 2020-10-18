import React from "react";
import { Link } from "react-router-dom";

export const PostItem = ({ title, user }) => {
  return (
    <section>
      <b>{title}</b> by <Link to={`/users/${user.id}`}>{user.name}</Link>
    </section>
  );
};
