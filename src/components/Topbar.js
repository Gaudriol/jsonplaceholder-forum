import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled("header")`
  padding: 20px 0;
  margin-bottom: 50px;
`;

const LogoText = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Topbar = () => (
  <Wrapper>
    <LogoText to="/">JSONPlaceholder Forum</LogoText>
  </Wrapper>
);
