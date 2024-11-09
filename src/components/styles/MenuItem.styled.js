import styled from "styled-components";

export const MenuItem = styled.div`
  padding: 8px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #333;
  opacity: 0.9;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBackground};
  }

  img {
    margin-right: 8px;
    width: 20px;
  }
`;
