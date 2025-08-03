import React from "react";
import ClickableImage from "../atoms/ClickableImage";

interface PokemonImageCardProps {
  imageURL: string;
  clickURL: string;
}

export default function PokemonImageCard({ imageURL, clickURL }: PokemonImageCardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full drop-shadow-sharp drop-shadow-primary p-8 hover:scale-105 border-background">
      <ClickableImage clickURL={clickURL} imageURL={imageURL || "/placeholder.svg"} />
    </div>
  );
}
