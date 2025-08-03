import React from "react";
import Label from "../atoms/Label";

interface TypeListProps {
  items: string[];
}

const TypeList = ({ items }: TypeListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <Label key={index} text={item} />
      ))}
    </div>
  );
};

export default TypeList;
