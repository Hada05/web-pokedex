"use client";
import React from "react";
import Image from "next/image";

interface ClickableImageProps {
  clickURL: string;
  imageURL: string;
}

const ClickableImage = ({ clickURL, imageURL }: ClickableImageProps) => {
  const handlePlayAudio = () => {
    if (clickURL) {
      const audio = new Audio(clickURL);
      audio.volume = 0.5; // Set volume to 50%
      audio.play();
    }
  };
  return (
    <div
      onClick={handlePlayAudio}
      className="text-right text-sm text-primary hover:cursor-pointer hover:scale-105"
    >
      <Image
        src={imageURL}
        width={200}
        height={200}
        sizes="100vw"
        className="object-fill w-full h-auto"
        alt={imageURL ?? "Pokemon"}
      />
    </div>
  );
};

export default ClickableImage;
