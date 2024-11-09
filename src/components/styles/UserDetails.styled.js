import styled from "styled-components";

export const UserDetails = styled.div`
  grid-column: 1/2;
  position: relative;
`;

export const TopDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 30px;
`;

export const UserPhoto = styled.img`
  @media (max-width: ${({ theme }) => theme.desktop}) {
    width: 100px;
  }
`;

export const UserName = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.textBright};
`;

export const FullName = styled.li`
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 18px;
  }
`;

export const EditProfile = styled.li`
  color: ${({ theme }) => theme.colors.red};
  text-decoration: underline;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;

  img {
    margin-right: 5px;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const Friends = styled.ul`
  list-style: none;
  display: grid;
  align-items: start;
  padding: 0;
  margin-top: 30px;

  li {
    cursor: pointer;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const FirstRow = styled.div`
  grid-row: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const SecondRow = styled.div`
  grid-row: 2;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textBright};
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textBright};
  line-height: 24px;
`;
