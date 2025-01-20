import React from 'react';
import Image from 'next/image';

export default function Home() {
  const imgs = [
    { src: 'Hamlet.png', classes: 'col-span-6 row-span-3' },
    { src: 'henry v.png', classes: 'col-span-6 row-span-4' },
    { src: 'macbeth.png', classes: 'col-span-3 row-span-3' },
    { src: 'mag cover mockup.png', classes: 'col-span-3 row-span-3' },
    { src: 'poster 1.jpg', classes: 'col-span-6 row-span-2' },
    { src: 'stationary.png', classes: 'col-span-5 row-span-4' },
    { src: 'tickets 1.jpg', classes: 'col-span-3 row-span-2' },
    { src: 'vinyl 1.png', classes: 'col-span-4 row-span-3' },
  ];

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-12 auto-rows-[150px] gap-7">
        {imgs.map((img, index) => (
          <div key={index} className={`overflow-hidden ${img.classes || ''}`}>
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
