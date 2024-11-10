import * as Styles from "./styles/UserDetails.styled";
import { OptionsMenu } from "./styles/OptionsMenu.styled";
import { MenuItem } from "./styles/MenuItem.styled";
import mainUserPhoto from "../img/main-user-photo.png";
import pencilIcon from "../img/pencil-icon.svg";
import threeDots from "../img/three-dots.svg";
import deleteIcon from "../img/delete-icon.svg";
import reportIcon from "../img/report-icon.svg";

export default function UserDetails({ showMenu, displayMenu }) {
  return (
    <Styles.UserDetails>
      <Styles.TopDetails>
        <Styles.UserPhoto src={mainUserPhoto} alt="main user" />
        <Styles.UserName>
          <Styles.FullName>Benjamin Clementine</Styles.FullName>
          <li>@benclementine</li>
          <Styles.EditProfile>
            <img src={pencilIcon} alt="pencil" />
            <span>Edit profile</span>
          </Styles.EditProfile>
        </Styles.UserName>
        <Styles.MenuButton onClick={showMenu}>
          <img src={threeDots} alt="three dots" />
          <OptionsMenu isVisible={displayMenu}>
            <MenuItem>
              <img src={reportIcon} alt="notebook with a pencil" />
              <span>Report User</span>
            </MenuItem>
            <MenuItem>
              <img src={deleteIcon} alt="cross button" />
              <span>Block User</span>
            </MenuItem>
          </OptionsMenu>
        </Styles.MenuButton>
      </Styles.TopDetails>
      <Styles.Friends>
        <li>
          <Styles.FirstRow>45</Styles.FirstRow>
          <Styles.SecondRow>synth</Styles.SecondRow>
        </li>
        <li>
          <Styles.FirstRow>110</Styles.FirstRow>
          <Styles.SecondRow>followers</Styles.SecondRow>
        </li>
        <li>
          <Styles.FirstRow>322</Styles.FirstRow>
          <Styles.SecondRow>following</Styles.SecondRow>
        </li>
      </Styles.Friends>
      <Styles.Description>
        Cryptocurrencies including Ethereum, Ripple, and Litecoin have all
        plunged between 20 to 30 percent each, according to CoinMarketCap. Here
        is the latest Ripple price news and live updates on XRP, bitcoin and
        Ethereum.
      </Styles.Description>
    </Styles.UserDetails>
  );
}
