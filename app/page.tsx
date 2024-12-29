import React from 'react';
import Image from 'next/image';

export default function Home() {
  const imgs = [
    { src: 'asajj.jpg', classes: '' },
    { src: 'drippy-trooper.jpg', classes: '' },
    { src: 'grievous.jpg', classes: '' },
    { src: 'random-sith.jpg', classes: '' },
    { src: 'retro-poster.jpg', classes: 'col-span-2' },
    { src: 'rey.jpg', classes: '' },
    { src: 'vader-art.jpg', classes: '' },
    { src: 'vader-luke.jpeg', classes: '' },
    { src: 'vader-tropers.jpg', classes: '' },
    { src: 'windu.jpg', classes: '' },
  ];

  return (
    <main className="bg-blue-500">
      <div className={'grid grid-cols-3 gap-1'}>
        {imgs.map((img, index) => (
          <div
            key={index}
            className={`h-80 overflow-hidden ${img.classes || ''}`}
          >
            <Image
              src={`/img/${img.src}`}
              alt={img.src.replace(/[-.]/g, ' ')} // Dynamically generate alt text
              width={400}
              height={160} // Use approximate aspect ratio
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
