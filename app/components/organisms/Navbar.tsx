"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const logoURL = "/pokemon.svg";

  const [Open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="min-w-screen p-4 bg-background flex justify-between items-center drop-shadow-md">
        <Image src={logoURL} alt="" width={100} height={100}></Image>

        <i
          className="text-foreground hover:cursor-pointer"
          onClick={() => setOpen(!Open)}
        >
          Menu
        </i>
      </div>
      {Open && (
        <ul className="text-foreground bg-background w-full justify-center items-center text-center flex flex-col gap-1 border-background z-50 drop-shadow-md border-t-2">
          <Link href="/" className="w-full">
            <li
              className="hover:cursor-pointer hover:bg-primary w-full "
              onClick={() => setOpen(!Open)}
            >
              Home
            </li>
          </Link>
          <Link href={"/pokedex"} className="w-full">
            <li
              className="hover:cursor-pointer hover:bg-primary w-full "
              onClick={() => setOpen(!Open)}
            >
              Pokédex
            </li>
          </Link>
          <Link href={"/about"} className="w-full">
            <li
              className="hover:cursor-pointer hover:bg-primary w-full "
              onClick={() => setOpen(!Open)}
            >
              About
            </li>
          </Link>
          <Link href={"/contacts"} className="w-full">
            <li
              className="hover:cursor-pointer hover:bg-primary w-full "
              onClick={() => setOpen(!Open)}
            >
              Contacts
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}
