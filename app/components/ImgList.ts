export interface ImgObject {
  id: string;
  mainImgSrc: string;
  divClasses?: string;
  projectPics: ProjectPictures[];
  title: string;
  summary: string;
}

interface ProjectPictures {
  src: string;
  divClasses: string;
  imgClasses: string;
}

export const imgList: ImgObject[] = [
  {
    mainImgSrc: 'book graphic.png',
    divClasses: '',
    id: 'classic_book_covers',
    projectPics: [
      {
        src: 'henry v.png',
        divClasses: 'col-span-4 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'hamlet.png',
        divClasses: 'col-span-4 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'macbeth.png',
        divClasses: 'col-span-4 row-span-6',
        imgClasses: ' ',
      },
      {
        src: '2 books.png',
        divClasses: 'md:col-span-full md:row-span-10',
        imgClasses: ' ',
      },
    ],
    title: 'Classic Book Covers',
    summary:
      'I have always had a love for Shakespeare. He was a master of the English language and his plays have classic themes about human nature and struggle. I wanted to show how this can translate to a modern sphere by using bright neon colors along with modern illustrations. I combined this with a textured, wood block typeface because I wanted it to have some tie to the past and a dramatic impact to show truly how influential these stories were and still are.',
  },
  {
    mainImgSrc: 'magazine.png',
    divClasses: '',
    id: 'vintage_rock_magazine',
    projectPics: [
      {
        src: 'mag cover1 copy.png',
        divClasses: 'col-span-4 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'mag cover2.png',
        divClasses: 'col-span-4 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'mag cover3.png',
        divClasses: 'col-span-4 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'mag pages mockup 2.png',
        divClasses: 'col-span-6 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'mag table of contents.png',
        divClasses: 'col-span-6 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'mag pages mockup 3.png',
        divClasses: 'row-span-4 col-span-4',
        imgClasses: ' ',
      },
      {
        src: 'pages 1-2.png',
        divClasses: 'row-span-4 col-span-4',
        imgClasses: ' ',
      },
      {
        src: 'pages 3-4.png',
        divClasses: 'row-span-4 col-span-4',
        imgClasses: ' ',
      },
      {
        src: 'pages 5-6.png',
        divClasses: 'col-span-6 row-span-6',
        imgClasses: ' ',
      },
      {
        src: 'pages 7-8.png',
        divClasses: 'col-span-6 row-span-6',
        imgClasses: ' ',
      },
    ],
    title: 'Vintage Rock Magazine',
    summary:
      'Redesigning Vintage Rock magazine has been one of my favorite projects I have worked on so far. I did a lot of research on artists like Chuck Berry, Bob Dylan, Michael Jackson and Led Zeppelin. Their stories are fascinating! I wanted to use striking typography, black and white photos, and bright colors to show their lasting impact on the world of music.',
  },
  {
    mainImgSrc: 'brochures.png',
    divClasses: '',
    id: '5th_avenue_theater',
    projectPics: [
      {
        src: '5th stationery.png',
        divClasses: 'col-span-6 row-span-6',
        imgClasses: ' ',
      },
      {
        src: '5th tickets.png',
        divClasses: 'col-span-6 row-span-8',
        imgClasses: '',
      },
      {
        src: 'banner 5th.png',
        divClasses: 'col-span-6 row-span-8',
        imgClasses: '',
      },
      {
        src: 'website 5th.png',
        divClasses: 'col-span-6 row-span-6',
        imgClasses: '',
      },
    ],
    title: '5th Avenue Theatre',
    summary:
      'The 5th Avenue Theatre in Seattle is something I have visited many times throughout my life. It’s a staple of the city and brings people together in an impactful way. I wanted my design to be simple but also seem elegant to show that this theatre is for everyone? I also based it on the geometric star shapes in the ornate ceiling and created a very geometric shape for the logo. By doing so I hoped to pay homage to the rich history of the theatre.',
  },
  {
    mainImgSrc: 'cards.png',
    divClasses: '',
    id: 'playing_cards',
    projectPics: [
      {
        src: 'cards mockup 2.png',
        divClasses: 'col-span-8 row-span-10',
        imgClasses: '',
      },
      {
        src: 'cards2.png',
        divClasses: 'col-span-4 row-span-5',
        imgClasses: '',
      },
      {
        src: 'cards4.png',
        divClasses: 'col-span-4 row-span-5',
        imgClasses: '',
      },
    ],
    title: 'Playing Cards',
    summary:
      'Creating the design for this pack of cards was super fun! I wanted it to be very simplified but illustration based. I hoped to create a lot of interesting contrast by having each side either black on white or white on black. I loved how it turned out!',
  },
  {
    mainImgSrc: 'spinning_cans.mp4',
    divClasses: '',
    id: 'vina_soda',
    projectPics: [
      {
        src: 'render3_1.mp4',
        divClasses: 'col-span-full row-span-10',
        imgClasses: '',
      },
      {
        src: 'grapefruit.png',
        divClasses: 'row-span-7 col-span-2',
        imgClasses: '',
      },
      {
        src: 'grapefruit back.png',
        divClasses: 'row-span-7 col-span-2',
        imgClasses: '',
      },
      {
        src: 'lemon lime.png',
        divClasses: 'row-span-7 col-span-2',
        imgClasses: '',
      },
      {
        src: 'lemon lime back.png',
        divClasses: 'row-span-7 col-span-2',
        imgClasses: '',
      },
      { src: 'peach.png', divClasses: 'row-span-7 col-span-2', imgClasses: '' },
      {
        src: 'peach back.png',
        divClasses: 'row-span-7 col-span-2',
        imgClasses: '',
      },
    ],
    title: 'Vina Soda',
    summary:
      'I am a lover of all things sparkling water and healthy sodas that are flavorful and colorful and just wonderful in my opinion. I wanted to create a design for one that combined playful illustrations, with great typography in a new way. I also loved the idea of creating taller cans that felt a bit more fancy than the regular size ones and just the vibe I wanted for this brand. This project was made with Illustrator and Cinema 4D.',
  },
  {
    mainImgSrc: 'listen poster.png',
    divClasses: '',
    id: 'listen_poster',
    projectPics: [
      {
        src: 'poster mockup1.png',
        divClasses: 'col-span-full row-start-1 row-end-12',
        imgClasses: '',
      },
      {
        src: 'poster mockup2.png',
        divClasses: 'col-span-6 row-span-8',
        imgClasses: '',
      },
      {
        src: 'listen poster copy.png',
        divClasses: 'col-span-6 row-span-8',
        imgClasses: '',
      },
    ],
    title: 'Listen Poster',
    summary:
      'I made this poster because listening is something I am really passionate about. I think most of us listen in order to add our next comment or story to the conversation instead of listening to truly hear or understand. This poster was meant to be a reminder to myself and everyone else that our relationships can really only prosper if we listen as if what people are saying really matters to us—and it needs to matter.',
  },
  {
    mainImgSrc: 'pink floyd posters.png',
    divClasses: '',
    id: 'pink_floyd',
    projectPics: [
      {
        src: 'tickets mockup.png',
        divClasses: 'col-span-4 row-start-1 row-end-6',
        imgClasses: '',
      },
      {
        src: 'pink floyd posters copy.png',
        divClasses: 'col-span-8 row-start-1 row-end-11',
        imgClasses: '',
      },
      {
        src: 'vinyl mockup.png',
        divClasses: 'col-span-4 row-span-5',
        imgClasses: 'object-contain h-auto',
      },
    ],
    title: 'Pink Floyd',
    summary:
      'Recreating a brand identity for Pink Floyd was fun because they are a band that was always pushing the bounds of rock music and the progressive rock genre of the time. I wanted their identity to be modular and geometric but also playful. I created a modular logotype and used it diagonally to demonstrate how they were creating something in music that was familiar but also entirely new and different.',
  },
  {
    mainImgSrc: 'web redesign.png',
    divClasses: '',
    id: 'web_redesign',
    projectPics: [
      {
        src: 'web_redesign_walkthrough.mp4',
        divClasses: 'col-span-full row-span-11',
        imgClasses: '',
      },
    ],
    title: 'Web Redesign',
    summary:
      'Redesigning the website for the American Book Review was a super cool design project. With this redesign I tried to create a simple but more interesting logo that could be used in a variety of applications, as well as an identity that felt more professional and formal as well as still welcoming. I also wanted to create an interface that was easy to navigate and user friendly so that anyone wanting to use the website could easily find what they were looking for.',
  },
];
