import * as Styles from "./styles/Card.styled";
import { Statistics } from "./styles/Statistics.styled";
import greyCircle from "../img/grey-circle.svg";
import hart from "../img/hart-icon.svg";
import triangle from "../img/triangle-icon.svg";
import sharedIcon from "../img/shared-icon.svg";

export default function Card({
  title,
  author,
  watched,
  likes,
  share,
  sharedVia,
  sharedTo,
}) {
  return (
    <Styles.CardContainer>
      <Styles.Shared shared={sharedVia}>
        <img src={sharedIcon} alt="link" />
        <span>{sharedVia}</span>
      </Styles.Shared>
      <Styles.Shared shared={sharedTo}>{sharedTo}</Styles.Shared>
      <Styles.Article>{title}</Styles.Article>
      <Styles.BottomCard>
        <Styles.Author>
          <img src={greyCircle} alt="grey circle" />
          <span>{author}</span>
        </Styles.Author>

        <Styles.StatisticsSection>
          <Styles.ShareButton href="/" toShare={share}>
            Share
          </Styles.ShareButton>
          <Statistics quantity={watched}>
            <img src={triangle} alt="triangle" />
            <span>{watched}</span>
          </Statistics>
          <Statistics quantity={likes} color="true">
            <img src={hart} alt="hart" />
            <span>{likes}</span>
          </Statistics>
        </Styles.StatisticsSection>
      </Styles.BottomCard>
    </Styles.CardContainer>
  );
}
