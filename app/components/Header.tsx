'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
  const pathname = usePathname();
  const isRootRoute = pathname === '/';
  const isAboutRoute = pathname === '/about';

  return (
    <div
      className={clsx(
        'flex justify-between h-14 my-20 px-7 md:px-20',
        !isRootRoute && 'border-b border-black pb-5 h-19 mb-20 mt-0'
      )}
    >
      {isRootRoute && (
        <div className="w-full pt-4">
          <p className="tracking-widest text-[14px] hidden sm:flex">
            FAITH ASTORIA MCCREADIE
          </p>
        </div>
      )}

      <div className="min-w-[100px] w-fit">
        <Link href="/">
          <Image
            src={'/img/mylogo_1.png'}
            height={200}
            width={400}
            className="h-full w-auto object-contain"
            alt=""
            unoptimized={true}
          />
        </Link>
      </div>
      <div className="w-full flex justify-end transition tracking-widest text-[14px] pt-4">
        {isAboutRoute ? (
          <Link href="/" className="hover:scale-105">
            HOME
          </Link>
        ) : (
          <Link href="/about" className="hover:scale-105">
            ABOUT
          </Link>
        )}
        {
          <Link href="/contact" className="ml-5 hover:scale-105">
            CONTACT
          </Link>
        }
      </div>
    </div>
  );
}
