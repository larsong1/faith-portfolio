import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between h-14 my-20">
      <div className="w-full">
        <p className="text-[18px]">FAITH McCREADIE</p>
      </div>
      <div className="">
        <Link href="/">
          <Image
            src={'/img/logo.png'}
            height={200}
            width={400}
            className="h-full w-1/8 object-contain"
            alt=""
          />
        </Link>
      </div>
      <div className="flex gap-5 w-full justify-end">
        <div className="hover:scale-105 transition">
          <Link href="/about">ABOUT</Link>
        </div>
        <div className="hover:scale-105 transition">
          <Link href="/projects">WORK</Link>
        </div>
        <div className="hover:scale-105 transition">
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}
