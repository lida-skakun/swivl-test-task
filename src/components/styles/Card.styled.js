import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Article = styled.div`
  font-size: 34px;
  font-family: "Montserrat", sans-serif;
  margin: 10px 0 30px 0;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    font-size: 26px;
  }
`;

export const Author = styled.div`
  font-size: 14px;
  display: flex;
  font-weight: 500;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

export const BottomCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatisticsSection = styled.div`
  display: flex;
  justify-content: end;
`;

export const ShareButton = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== "toShare",
})`
  display: ${({ toShare }) => (toShare ? "inline" : "none")};
  color: ${({ theme }) => theme.colors.red};
  text-decoration: none;
  font-size: 18px;
  text-align: right;
  font-weight: 400;
  margin-right: 5px;
`;

export const Shared = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "shared",
})`
  display: ${({ shared }) => (shared ? "flex" : "none")};
  align-items: center;
`;
