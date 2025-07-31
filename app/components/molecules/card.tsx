import React from "react";

interface CardProps {
  imgURL?: string;
  title: string;
  desc?: string;
  color?: string;
}

const shadowMap: Record<string, string> = {
  primary: "drop-shadow-primary",
  secondary: "drop-shadow-secondary",
  tertiary: "drop-shadow-tertiary",
};

function Card({ imgURL, title, desc, color = "primary" }: CardProps) {
  const dropShadowColor = shadowMap[color] || shadowMap["primary"];

  return (
    <div
      className={`flex flex-wrap gap-3 bg-foreground rounded-2xl drop-shadow-sharp ${dropShadowColor}`}
    ></div>
  );
}

export default Card;
