import { CardData } from "@/types/CardData";
import React from "react";
import Card from "../molecules/Card";

interface CardPopulateProps {
  cards: CardData[];
}

const CardGrid = ({ cards }: CardPopulateProps) => {
  return (
    <div className="grid-container grid gap-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardGrid;
