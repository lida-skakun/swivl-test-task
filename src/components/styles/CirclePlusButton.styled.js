import styled from "styled-components";

export const CirclePlusButton = styled.button`
  position: absolute;
  top: 70%;
  left: 95%;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;
