import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between xl:justify-normal xl:grid xl:grid-cols-1">
      <div className="my-5 xl:mt-0 h-20 xl:mr-12 flex gap-6 xl:flex-wrap text-[15px] xl:grid xl:grid-cols-1">
        <Image
          src={'/img/logo.png'}
          height={200}
          width={400}
          className="h-full xl:h-auto w-auto object-contain"
          alt=""
        />
        <div className="visible xl:invisible flex flex-col justify-center">
          <p className="text-[18px]">FAITH MCCREADIE</p>
        </div>
      </div>
      <div className="my-5 h-20 xl:mr-12 flex xl:flex-wrap xl:grid xl:grid-cols-1 gap-6 text-[15px]">
        <div className="flex flex-col justify-center hover:scale-105 transition">
          <a href="/about">ABOUT</a>
        </div>
        <div className="flex flex-col justify-center hover:scale-105 transition">
          <a href="/projects">PROJECTS</a>
        </div>
        <div className="flex flex-col justify-center hover:scale-105 transition">
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
}
