import styled from "styled-components";

export const Text = styled("p")`
  color: ${({ theme, color = "black" }) => theme.colors[color]};
  font-weight: ${({ fontWeight = "500" }) => fontWeight};
  font-style: ${({ fontStyle = "normal" }) => fontStyle};
  font-size: ${({ fontSize = "inherit" }) => fontSize};
`;
