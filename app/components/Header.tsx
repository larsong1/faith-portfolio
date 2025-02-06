import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="mr-12">
      <Image src={'/img/logo.png'} height={200} width={400} alt="" />

      <div className="mt-4 flex-wrap grid grid-cols-1 gap-y-6 text-[17.5px]">
        <div className="">
          <p className="text-[26px]">FAITH MCCREADIE</p>
        </div>
        <div className="hover:scale-105 transition">
          <a href="/about">ABOUT</a>
        </div>
        <div className="hover:scale-105 transition">
          <a href="/projects">PROJECTS</a>
        </div>
        <div className="hover:scale-105 transition">
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
}
