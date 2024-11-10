import * as Styles from "./styles/Header.styled";
import { Flex } from "./styles/Flex.styled";
import { CirclePlusButton } from "./styles/CirclePlusButton.styled";
import headerUserPhoto from "../img/header-user-photo.png";
import logo from "../img/logo-icon.svg";
import arrowDown from "../img/arrow-down-icon.svg";
import bellIcon from "../img/bell-icon.svg";
import presentIcon from "../img/present-icon.svg";
import mediumIcon from "../img/medium-icon.svg";

export default function Header({ isActive, selectLink }) {
  return (
    <Styles.HeaderContainer>
      <Styles.Width>
        <Flex>
          <Styles.Logo src={logo} alt="logo Synth" />
          <Styles.HeaderProfile>
            <li>Arthur Wood</li>
            <li>
              <Styles.HeaderUserPhoto src={headerUserPhoto} alt="user" />
              <img src={arrowDown} alt="arrow down" />
            </li>
            <li>
              <img src={bellIcon} alt="notifications bell" />
              <img src={presentIcon} alt="present" />
              <img src={mediumIcon} alt="medium" />
            </li>
          </Styles.HeaderProfile>
        </Flex>
        <Styles.Navigation>
          <Styles.StyledNavLink
            href="/"
            isActive={isActive === "feed"}
            onClick={() => selectLink("feed")}
          >
            FEED
          </Styles.StyledNavLink>
          <Styles.StyledNavLink
            href="/"
            isActive={isActive === "explore"}
            onClick={() => selectLink("explore")}
          >
            EXPLORE
          </Styles.StyledNavLink>
          <Styles.StyledNavLink
            href="/"
            isActive={isActive === "discussion"}
            onClick={() => selectLink("discussion")}
          >
            DISCUSSION
          </Styles.StyledNavLink>
          <CirclePlusButton>+</CirclePlusButton>
        </Styles.Navigation>
      </Styles.Width>
    </Styles.HeaderContainer>
  );
}
