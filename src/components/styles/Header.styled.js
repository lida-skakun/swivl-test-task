import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.06);
  padding: 0 100px;
  position: relative;
  max-width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const flexCentered = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Width = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 20px;
  }
`;

export const HeaderProfile = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;
  ${flexCentered}

  li {
    margin-left: 15px;
    cursor: pointer;
    ${flexCentered}
  }
`;

export const HeaderUserPhoto = styled.img`
  border-radius: 50px;
  width: 32px;
  margin-right: 5px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const StyledNavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 14px;
  margin-right: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid transparent;
  border-image: ${({ theme }) => theme.colors.gradient};
  border-image-slice: 1;

  &.active {
    color: blue;
    font-weight: bold;
  }

  &:hover {
    color: gray;
  }
`;
