import styled from "styled-components";

export const OptionsMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  position: absolute;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  min-width: 176px;
  max-width: 124px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Open Sans", Roboto,
    Oxygen, Ubuntu, Cantarell, "Segoe UI", "Helvetica Neue", sans-serif;
  top: 40px;
  right: -150px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    right: -50px;
  }
`;
