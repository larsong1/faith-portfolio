import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex">
      <div className="basis-1/2 pr-[80px]">
        <p className="tracking-widest text-2xl mb-7">ABOUT</p>
        <p>
          Hi, I’m Faith, a graphic design student at BYU in Provo. I absolutely
          love all things design, typography and branding as well as my family
          and my wonderful husband. I’m from Washington and the pacific
          northwest will always be my home. I love playing intense board games
          (and winning) and taking pictures to remember the most important
          moments.
          <br />
          <br />I love the way design can create meaningful messages and can
          influence culture for better or for worse. I hope to be able to use my
          skills to put messages of positivity, passion and life into the world.
          I hope to be able to be a force for good. Feel free to take a look
          around and reach out to me, I’d love to hear from you!
        </p>
      </div>
      <div className="pl-[80px] basis-1/2 tracking-widest">
        <Image
          src="/img/portrait.jpg"
          alt="Faith McCreadie"
          className="object-cover w-full h-full"
          width={400}
          height={400}
        />
        <p className="mt-7">
          faithastoria@gmail.com
          <br />
          509-438-1392
        </p>
      </div>
    </div>
  );
}
