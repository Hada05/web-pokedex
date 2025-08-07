import React from "react";
import Image from "next/image";
import TextValueList from "../../components/molecules/TextValueList";
import SplitWhite from "../../components/atoms/SplitWhite";

export default function Page() {
  const myContacts = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/amawmaw/",
    },
    {
      title: "GitHub",
      url: "https://github.com/Hada05",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-baseline w-full h-full min-h-screen gap-8">
      <SplitWhite />
      <h1 className="text-6xl sm:text-8xl font-extrabold text-center text-shadow-sharp text-shadow-primary text-tertiary">
        CONTACTS
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 items-center justify-center w-full h-full gap-8">
        <div className="flex flex-wrap w-full bg-foreground rounded-2xl drop-shadow-sharp p-8 gap-4 text-background border-background border-2 drop-shadow-tertiary order-2 sm:order-1">
          <TextValueList
            items={myContacts.map((contact) => ({
              label: contact.title,
              value: "Click to visit",
              link: contact.url,
              linkType: "url",
            }))}
          />
        </div>
        <div className="flex flex-wrap order-1 w-full h-full items-center justify-center">
          <Image
            src={"/rotom.svg"}
            alt="Rotom"
            width={200}
            height={200}
            className="object-contain w-full drop-shadow-sharp-small drop-shadow-tertiary
              "
          />
        </div>
      </div>
    </div>
  );
}
