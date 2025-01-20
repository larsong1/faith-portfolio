import React from 'react';
import Image from 'next/image';

export default function Home() {
  const imgs = [{ src: 'asajj.jpg', classes: '' }];

  return (
    <main>
      <div className="grid grid-cols-12 gap-6">
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
              className="h-full w-full object-cover bottom-0"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
