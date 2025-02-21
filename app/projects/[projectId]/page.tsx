import React from 'react';
import Image from 'next/image';
import { imgList } from '@/app/components/ImgList';
import { ImgObject } from '@/app/components/ImgList';

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const projectImgObject: ImgObject = imgList.find(
    (img) => img.id === params.projectId
  ) as ImgObject;

  return (
    <main>
      <div className="grid grid-cols-6">
        {projectImgObject.projectPics.map((src, index) => (
          <div
            key={index}
            className={`col-span-1 object-contain hover:scale-105 transition hover:shadow-lg active:scale-100`}
          >
            {src.endsWith('.mp4') ? (
              <video
                width={400}
                height={400}
                autoPlay
                loop
                muted
                className="h-full w-full cursor-pointer"
              >
                <source
                  src={`/img/${projectImgObject.id + '/' + src}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={`/img/${projectImgObject.id + '/' + src}`}
                alt={src.replace(/[-.]/g, ' ')} // Dynamically generate alt text
                width={400}
                height={400} // Default dimensions; actual size controlled by grid
                className="h-full w-full cursor-pointer"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
