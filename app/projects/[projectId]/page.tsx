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
        <div className="text-3xl uppercase tracking-widest">
          {projectImgObject.title}
        </div>
        <div className="w-3/4 mx-auto">{projectImgObject.summary}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[50px] gap-7">
        {projectImgObject.projectPics.map(({ src, divClasses, imgClasses }) => (
          <React.Fragment key={src}>
            {src.endsWith('.mp4') ? (
              <div className={`col-span-4 row-span-5 ${divClasses}`}>
                <video
                  width={400}
                  height={400}
                  autoPlay
                  loop
                  muted
                  className={`object-fit w-full h-full ${imgClasses}`}
                >
                  <source
                    src={`/img/${projectImgObject.id + '/' + src}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className={`col-span-4 row-span-6 ${divClasses}`}>
                <Image
                  src={`/img/${projectImgObject.id + '/' + src}`}
                  alt={src.replace(/[-.]/g, ' ')} // Dynamically generate alt text
                  width={400}
                  height={400} // Default dimensions; actual size controlled by grid
                  className={`object-cover w-full h-full ${imgClasses}`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
