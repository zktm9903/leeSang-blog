import Link from 'next/link';
import { store } from '../types/interface';

export default function ArticlePreview({ article }: { article: store }) {
  return (
    <Link
      href={`/article?id=${article.id}`}
      className="hover:bg-_gray flex justify-center space-x-2 rounded-lg px-4 py-3">
      <h1 className="">{article.title}</h1>
      <img src={article.img} className="h-20 w-20" />
    </Link>
  );
}
