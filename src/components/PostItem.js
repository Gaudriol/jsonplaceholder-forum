import React from "react";
import styled from "styled-components";

import { AuthorLink } from "./AuthorLink";
import { StyledLink } from "./Link";
import { TitleLink } from "./TitleLink";

const Item = styled("article")`
  &:not(:first-of-type) {
    margin-top: 48px;
  }
`;

const Content = styled("p")`
  margin: 16px 0;
`;

export const PostItem = ({ title, user, body, id }) => {
  return (
    <Item>
      <h3>
        <TitleLink to={`/posts/${id}`}>{title}</TitleLink>
      </h3>
      <AuthorLink to={`/users/${user.id}`}>by {user.name}</AuthorLink>
      <Content>{body}</Content>
      <StyledLink to={`/posts/${id}`}>{">>>"} View comments</StyledLink>
    </Item>
  );
};
