import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between h-14 my-20">
      <div className="w-full py-auto">
        <p className="text-[18px]">FAITH McCREADIE</p>
      </div>
      <div className="">
        <Image
          src={'/img/logo.png'}
          height={200}
          width={400}
          className="h-full w-1/8 object-contain"
          alt=""
        />
      </div>
      <div className="flex gap-5 py-auto w-full justify-end">
        <div className="hover:scale-105 transition">
          <a href="/about">ABOUT</a>
        </div>
        <div className="hover:scale-105 transition">
          <a href="/projects">WORK</a>
        </div>
        <div className="hover:scale-105 transition">
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
}
