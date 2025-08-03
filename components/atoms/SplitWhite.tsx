import React from "react";
import Image from "next/image";

const SplitWhite = () => {
  return (
    <Image
      src="/bg.png"
          alt="Description of the image"
        fill
      className="absolute inset-0 object-fill -z-50"
    />
  );
};

export default SplitWhite;
