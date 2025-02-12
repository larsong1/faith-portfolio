import React from 'react';
import Image from 'next/image';
import { imgList } from './components/ImgList';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-6">
        {imgList.map((img, index) => (
          <div
            key={index}
            className={`col-span-1 object-contain hover:scale-105 transition hover:shadow-lg ${
              img?.divClasses || ''
            }`}
          >
            <Image
              src={`/img/${img.src}`}
              alt={img.src.replace(/[-.]/g, ' ')} // Dynamically generate alt text
              width={400}
              height={400} // Default dimensions; actual size controlled by grid
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
