import React from 'react';
import Image from 'next/image';
import { imgList } from '@/app/components/ImgList';
import { ImgObject } from '@/app/components/ImgList';

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;

  const projectImgObject: ImgObject = imgList.find(
    (img) => img.id === projectId
  ) as ImgObject;

  return (
    <main>
      <div className="space-y-5 text-center mb-10">
        <div className="text-4xl uppercase">{projectImgObject.title}</div>
        <div className="w-1/2 mx-auto">{projectImgObject.summary}</div>
      </div>
      <div className="grid grid-cols-6 gap-7">
        {projectImgObject.projectPics.map((src, index) => (
          <div key={index} className={`col-span-2 object-contain`}>
            {src.endsWith('.mp4') ? (
              <video
                width={400}
                height={400}
                autoPlay
                loop
                muted
                className="h-full w-full"
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
                className={'h-full w-full'}
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
