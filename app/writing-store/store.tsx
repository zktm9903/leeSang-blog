import Markdown from 'markdown-to-jsx';
import { store } from '../types/interface';
import { Boy_With_Luv } from './lyrics';

const store: store[] = [
  {
    title:
      '작은 것들을 위한 시 (Boy With Luv) BTS lyrics/letra Traducción al español',
    img: 'https://upload.wikimedia.org/wikipedia/ko/thumb/e/ee/%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_-_MAP_OF_THE_SOUL_-_PERSONA.png/220px-%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_-_MAP_OF_THE_SOUL_-_PERSONA.png',
    writing: (
      <>
        <img
          src="https://upload.wikimedia.org/wikipedia/ko/thumb/e/ee/%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_-_MAP_OF_THE_SOUL_-_PERSONA.png/220px-%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_-_MAP_OF_THE_SOUL_-_PERSONA.png"
          className="mt-4"
        />
        <Markdown>{Boy_With_Luv}</Markdown>
        <iframe
          className="mt-4 w-full"
          height="315"
          src="https://www.youtube.com/embed/XsX3ATc3FbA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </>
    ),
    description: 'description',
    tags: ['lyrics', 'BTS', 'KPOP'],
    date: new Date(),
    openGraph: {
      title: 'hihi',
      description: 'des',
      url: 'dafas',
      image: 'fsf',
    },
    twitter: {
      title: 'hihi',
      description: 'des',
      url: 'dafas',
      image: 'fsf',
    },
  },
];

function toMap(arr: store[]) {
  return new Map(
    arr.map((obj, idx) => {
      obj['id'] = idx;
      return [idx, obj];
    })
  );
}

export const writingMap = toMap(store);
export const writingArr = store.map((el, idx) => {
  el['id'] = idx;
  return el;
});
