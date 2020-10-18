const { Link } = require("react-router-dom");
const { default: styled } = require("styled-components");

export const AuthorLink = styled(Link)`
  font-style: italic;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
