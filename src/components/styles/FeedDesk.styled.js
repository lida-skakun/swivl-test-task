import styled from "styled-components";

export const FeedDesk = styled.div`
  grid-column: 2/4;
`;

export const PublicPrivateMode = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  gap: 10px;
  margin: 0;
`;

export const Switcher = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isPrivate",
})`
  position: relative;
  width: 40px;
  height: 24px;
  background-color: ${({ isPrivate }) => (isPrivate ? "#e74c3c" : "#ccc")};
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
`;

export const SwitchButton = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isPrivate",
})`
  position: absolute;
  top: 3px;
  left: ${({ isPrivate }) => (isPrivate ? "20px" : "2px")};
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 0.3s;
`;

export const CardSections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(2, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
