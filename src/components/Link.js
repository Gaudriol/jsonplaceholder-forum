import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
