import * as Styles from "./Header.styles";
import headerUserPhoto from "../../img/header-user-photo.png";
import logo from "../../img/logo-icon.svg";
import arrowDown from "../../img/arrow-down-icon.svg";
import bellIcon from "../../img/bell-icon.svg";
import presentIcon from "../../img/present-icon.svg";
import mediumIcon from "../../img/medium-icon.svg";

export default function Header() {
  return (
    <Styles.HeaderContainer>
      <Styles.LogoProfileSection>
        <img src={logo} alt="logo Synth" />
        <Styles.HeaderProfile>
          <li>Arthur Wood</li>
          <li>
            <Styles.HeaderUserPhoto src={headerUserPhoto} alt="User" />
          </li>
          <img src={arrowDown} alt="arrow down icon" />
          <li></li>
          <li>
            <img src={bellIcon} alt="notifications bell icon" />
          </li>
          <li>
            <img src={presentIcon} alt="present icon" />
          </li>
          <li>
            <img src={mediumIcon} alt="medium icon" />
          </li>
        </Styles.HeaderProfile>
      </Styles.LogoProfileSection>
      <Styles.Navigation>
        <Styles.Nav>
          <a href="http://">FEED</a>
          <a href="http://">EXPLORE</a>
          <a href="http://">DISCUSSION</a>
        </Styles.Nav>
        <button>+</button>
      </Styles.Navigation>
    </Styles.HeaderContainer>
  );
}
