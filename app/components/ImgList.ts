export interface ImgObject {
  id: string;
  src: string;
  divClasses?: string;
  projectPics: string[];
}

export const imgList: ImgObject[] = [
  {
    src: 'macbeth.png',
    divClasses: '',
    id: 'classic_book_covers',
    projectPics: ['2 books.png', 'henry v.png', 'hamlet.png'],
  },
  {
    src: 'magazine.png',
    divClasses: '',
    id: 'vintage_rock_magazine',
    projectPics: [],
  },
  {
    src: 'brochures.png',
    divClasses: '',
    id: '5th_avenue_theater',
    projectPics: [],
  },
  { src: 'cards.png', divClasses: '', id: 'playing_cards', projectPics: [] },
  {
    src: 'spinning_cans.mp4',
    divClasses: '',
    id: 'vina_soda',
    projectPics: [],
  },
  {
    src: 'spinning_cans.mp4',
    divClasses: '',
    id: 'vina_soda',
    projectPics: [],
  },
  {
    src: 'listen poster.png',
    divClasses: '',
    id: 'listen_poster',
    projectPics: [],
  },
  {
    src: 'pink floyd posters.png',
    divClasses: '',
    id: 'pink_floyd',
    projectPics: [],
  },
  {
    src: 'web redesign.png',
    divClasses: '',
    id: 'web_redesign',
    projectPics: [],
  },
];
