import Link from 'next/link';
import { store } from '../types/interface';
import { writingArr } from '../writing-store/store';

function toTagSet(arr: store[]) {
  const set = new Set();
  arr.map((el) => el.tags.forEach((tag: string) => set.add(tag)));
  return Array.from(set) as string[];
}

export default function TagLinks({
  pick,
  path,
  param,
}: {
  pick: string | undefined;
  path: string;
  param: string;
}) {
  return (
    <div className="flex space-x-2 text-sm">
      {toTagSet(writingArr).map((el: string) => (
        <Link
          href={`${path}?tag=${encodeURIComponent(el)}${
            param ? `&${param}` : ''
          }`}
          key={el}
          className={`${pick !== el && 'opacity-50'}`}>
          {el}
        </Link>
      ))}
    </div>
  );
}
