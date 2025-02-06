import React from 'react';
import Image from 'next/image';
import { imgList } from './components/ImgList';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-12 auto-rows-[50px] gap-7">
        {imgList.map((img, index) => (
          <div
            key={index}
            className={`overflow-hidden hover:scale-105 transition hover:shadow-lg ${
              img.classes || ''
            }`}
          >
            <Image
              src={`/img/${img.src}`}
              alt={img.src.replace(/[-.]/g, ' ')} // Dynamically generate alt text
              width={400}
              height={400} // Default dimensions; actual size controlled by grid
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
