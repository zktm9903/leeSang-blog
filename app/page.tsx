import { Metadata } from 'next';
import TagLinks from './components/TagLinks';
import PageController from './components/PageControler';
import { writingArr } from './writing-store/store';
import ArticlePreview from './components/ArticlePreview';
import { BLOG_TITLE } from './constant/info';

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: 'Nice to meet you. I am a Korean who writes anything.',
  icons: {
    icon: '/angCat.png',
  },
};

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const page = searchParams?.page;
  const tag = searchParams?.tag;

  function articleFilter() {
    return writingArr
      .filter((el) => {
        if (!tag) return true;
        if (el.tags.includes(tag)) return true;
        return false;
      })
      .slice((Number(page) - 1) * 10, 10);
  }

  return (
    <section>
      <TagLinks
        pick={searchParams?.tag}
        path={''}
        param={page ? `page=${page}` : ''}
      />
      <div className="my-4 flex flex-col">
        {articleFilter().map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
      <PageController
        path={''}
        params={tag ? [`tag=${tag}`] : []}
        contentsLen={writingArr.length}
        nowNum={page ? Number(page) : 1}
      />
    </section>
  );
}
