import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="flex-col text-center mt-[250px] mb-10 tracking-widest space-y-1">
      <div className="text-[14px]">FAITH ASTORIA MCCREADIE</div>
      <div className="text-[10px] hover:text-gray-500">
        <Link href="/contact">faithastoria@gmail.com</Link>
      </div>
      <div className="text-[10px]">509-438-1392</div>
    </div>
  );
}
