import { CardData } from "@/types/CardData";
import React from "react";
import Card from "../molecules/Card";

interface CardGridProps {
  cards: CardData[];
}

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <div className="grid-container grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index} card={card}></Card>
      ))}
    </div>
  );
};

export default CardGrid;
