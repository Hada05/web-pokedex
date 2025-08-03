"use client";
import React from "react";
import Link from "next/link";

interface TextValueProps {
  label: string;
  value: string | number;
  link?: string;
  linkType?: "audio" | "video" | "image" | "url";
}

const TextValue = ({ label, value, link, linkType }: TextValueProps) => {
  const handlePlayAudio = () => {
    if (linkType === "audio" && link) {
      const audio = new Audio(link);
      audio.play();
    }
  };

  const renderValue = () => {
    if (!link) return <p className="text-right text-sm">{value}</p>;

    if (linkType === "audio") {
      return (
        <p
          onClick={handlePlayAudio}
          className="text-right text-sm text-primary hover:cursor-pointer hover:underline"
        >
          {value}
        </p>
      );
    }

    if (linkType === "video" || linkType === "image" || linkType === "url") {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-right text-sm text-primary hover:underline"
        >
          {value}
        </a>
      );
    }

    return <p className="text-right text-sm">{value}</p>;
  };

  return (
    <div className="grid grid-cols-2 w-full items-center gap-4">
      <p className="text-left break-words text-sm">{label}</p>
      {renderValue()}
    </div>
  );
};

export default TextValue;
