import styled from "styled-components";

export const Statistics = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "quantity",
})`
  display: ${({ quantity }) => (quantity ? "flex" : "none")};
  color: ${({ theme, color }) =>
    color ? theme.colors.red : theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  align-items: center;

  img,
  span {
    margin-right: 5px;
  }
`;
