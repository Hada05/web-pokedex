import React from "react";
import Image from "next/image";

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
      className={`flex flex-wrap bg-foreground rounded-2xl drop-shadow-sharp ${dropShadowColor} p-4 w-full h-full justify-between items-center`}
    >
      {imgURL && (
        <div className="w-1/3 flex justify-center items-center">
          <Image src={`${imgURL}`} alt="" width={100} height={100}></Image>
        </div>
      )}
      <div className="flex flex-col justify-center gap-8 text-center h-full w-2/3 text-background ">
        <h1 className="font-semibold text-4xl">{title}</h1>
        <p className="bg-primary text-foreground rounded-2xl">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
