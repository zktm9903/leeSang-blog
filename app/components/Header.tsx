import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex h-14 items-center text-xl font-semibold">
      <Link href={'/'}>
        <Image
          src="/angCat.png"
          alt="ico"
          width={50}
          height={50}
          className="mr-3 w-6 hover:scale-105"
        />
      </Link>
      <Link href={'/'}>leesang-blog</Link>
    </header>
  );
}
