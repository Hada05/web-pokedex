import React from "react";
import Card from "@/components/molecules/Card";
import SplitWhite from '../../components/atoms/SplitWhite';

export default function Page() {
  const menuData = [
    {
      title: "All Your Pokémon, All in One Place",
      desc: "This is a Pokédex web app designed to help you explore Pokémon from all generations in one place. Whether you’re a long-time fan or just getting started, this site gives you easy access to essential info like types, stats, and how they look! All of this is powered by the PokéAPI.",
      imgURL: "/pokedex.svg",
      url: "/about",
      color: "primary",
    },
    {
      title: "Trainer Turned Coder",
      desc: "Hey there! I’m Hada an informatics student and aspiring full-stack developer. I built this project as both a personal challenge and a tribute to one of my favorite franchises, along with fulfilling my bootcamp's project task. It’s part of my learning journey into modern web development, and I'm always leveling up just like a good ol’ starter Pokémon.",
      imgURL: "/oshawott.svg",
      url: "/about",
      color: "secondary",
    },
    {
      title: "The Stack That Caught ’Em All",
      desc: "Powered by Next.js, styled with TailwindCSS, modularized with React, and fueled by the PokéAPI, this app was crafted with modern web tools and way too many procrastination breaks. It’s dynamic, responsive, and built with clean components that scale. No rare candies required.",
      imgURL: "stack.svg",
      url: "/about",
      color: "tertiary",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between w-full h-full min-h-screen gap-8">
      <SplitWhite />
      <h1 className="text-6xl sm:text-8xl font-extrabold text-center text-shadow-sharp text-shadow-tertiary text-secondary">
        ABOUT THIS PROJECT
      </h1>
      <div className="flex flex-col gap-4 h-full w-full">
        {menuData.map((card, index) =>
          index % 2 === 0 ? (
            <Card key={index} card={card} variants="fillContainerL" />
          ) : (
            <Card key={index} card={card} variants="fillContainerR" />
          )
        )}
      </div>
    </div>
  );
}
