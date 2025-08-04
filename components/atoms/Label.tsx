import React from "react";
import { pokemonTypes } from "@/types/PokemonTypes";

interface LabelProps {
  text: string;
  textColor?: "text-background" | "text-primary" | "text-foreground";
}

const Label = ({ text, textColor = "text-foreground" }: LabelProps) => {
  const matchedType = pokemonTypes.find(
    (typeObj) => typeObj.type.toLowerCase() === text.toLowerCase()
  );

  const bgColor = matchedType?.color || "bg-background";

  return (
    <div
      className={`flex items-center justify-center rounded-2xl p-2 ${textColor} ${bgColor} font-bold text-xs`}
    >
      <span>{text.toUpperCase()}</span>
    </div>
  );
};

export default Label;
