'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { imgList } from './components/ImgList';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-6">
        {imgList.map((img, index) => (
          <div
            key={index}
            className={`col-span-1 object-contain hover:scale-105 transition hover:shadow-lg active:scale-100 ${
              img?.divClasses || ''
            }`}
          >
            {img.src.endsWith('.mp4') ? (
              <Link href={`/projects/${img.id}`}>
                <video
                  width={400}
                  height={400}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full"
                >
                  <source
                    src={`/img/${img.id + '/' + img.src}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Link>
            ) : (
              <Link href={`/projects/${img.id}`}>
                <Image
                  src={`/img/${img.id + '/' + img.src}`}
                  alt={img.src.replace(/[-.]/g, ' ')} // Dynamically generate alt text
                  width={400}
                  height={400} // Default dimensions; actual size controlled by grid
                  className="h-full w-full cursor-pointer"
                />
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
