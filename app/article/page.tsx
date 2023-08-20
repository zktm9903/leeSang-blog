import RedirectInduction from '../components/RedirectInduction';
import metaData from '../seo/metaData';
import { writingMap } from '../writing-store/store';
import { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const content = writingMap.get(Number(searchParams?.id));

  if (!content) return {};
  return metaData(content);
}

export default function Article({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const content = writingMap.get(Number(searchParams?.id));

  return (
    <>
      {!content && <RedirectInduction to={'/'} />}
      {content && (
        <>
          <section>
            <article>
              <h1 className="mb-2 text-xl">{content?.title}</h1>
              <p className="text-sm opacity-50">
                date created - {content.date.toDateString()}
              </p>
              {content.writing}
            </article>
          </section>
        </>
      )}
    </>
  );
}
