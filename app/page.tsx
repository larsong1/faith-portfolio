'use client';
import React from 'react';
import Image from 'next/image';
import { imgList } from './components/ImgList';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

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
              <video
                width={400}
                height={400}
                autoPlay
                loop
                muted
                className="h-full w-full cursor-pointer"
                onClick={() => router.push(`/projects/${img.id}`)}
              >
                <source
                  src={`/img/${img.id + '/' + img.src}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={`/img/${img.id + '/' + img.src}`}
                alt={img.src.replace(/[-.]/g, ' ')} // Dynamically generate alt text
                width={400}
                height={400} // Default dimensions; actual size controlled by grid
                className="h-full w-full cursor-pointer"
                onClick={() => router.push(`/projects/${img.id}`)}
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
