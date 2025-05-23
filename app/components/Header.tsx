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
  const isContactRoute = pathname === '/contact';

  return (
    <div
      className={clsx(
        'flex justify-between h-14 my-20 px-7 md:px-20',
        !isRootRoute && 'border-b border-black pb-5 h-19 mb-20 mt-0'
      )}
    >
      {isRootRoute && (
        <div
          className={clsx(
            'w-full tracking-widest text-[14px]',
            isRootRoute ? 'pt-4' : 'pt-2'
          )}
        >
          <p className=" hidden sm:flex">FAITH ASTORIA MCCREADIE</p>
        </div>
      )}

      <div
        className={clsx(
          'min-w-[100px] w-fit flex',
          isRootRoute ? 'justify-center' : 'justify-normal'
        )}
      >
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
      <div
        className={clsx(
          'w-full flex justify-end transition tracking-widest text-[14px]',
          isRootRoute ? 'pt-4' : 'pt-2'
        )}
      >
        {isAboutRoute ? (
          <Link href="/" className="hover:scale-105">
            HOME
          </Link>
        ) : (
          <Link href="/about" className="hover:scale-105">
            ABOUT
          </Link>
        )}
        {!isContactRoute && (
          <Link href="/contact" className="ml-5 hover:scale-105">
            CONTACT
          </Link>
        )}
      </div>
    </div>
  );
}
