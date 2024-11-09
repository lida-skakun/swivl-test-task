import * as Styles from "./styles/FeedDesk.styled";
import CardData from "../assets/card.json";
import Card from "./Card";
import React, { useState } from "react";

const cards = CardData.cardData.map((card) => (
  <Card
    id={card.id}
    title={card.title}
    author={card.author}
    sharedTo={card.sharedTo}
    sharedVia={card.sharedVia}
    share={card.share}
    likes={card.likes}
    watched={card.watched}
  />
));

export default function FeedDesk() {
  const [isPrivate, setIsPrivate] = useState(false);

  const switchMode = () => {
    setIsPrivate((prev) => !prev);
  };

  return (
    <Styles.FeedDesk>
      <Styles.PublicPrivateMode>
        <label>Public</label>
        <Styles.Switcher isPrivate={isPrivate} onClick={switchMode}>
          <Styles.SwitchButton isPrivate={isPrivate} />
        </Styles.Switcher>
        <label>Private</label>
      </Styles.PublicPrivateMode>
      <Styles.CardSections>{cards}</Styles.CardSections>
    </Styles.FeedDesk>
  );
}
