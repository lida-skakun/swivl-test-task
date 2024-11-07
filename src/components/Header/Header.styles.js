import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.06);
  padding: 0 100px;
`;

export const flexCentered = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoProfileSection = styled.div`
  ${flexCentered}
`;

export const HeaderProfile = styled.ul`
  list-style: none;
  ${flexCentered}
  li {
    margin-right: 5px;
  }
`;

export const HeaderUserPhoto = styled.img`
  border-radius: 50px;
  width: 32px;
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #3e4056;
    font-weight: 500;
    font-size: 14px;
    margin-right: 30px;
  }
`;

export const Navigation = styled.div`
  ${flexCentered}
`;
