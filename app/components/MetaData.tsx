import Head from 'next/head';
import { store } from '../types/interface';
import { BLOG_TITLE, DOMAIN } from '../constant/info';

export default function MetaData({
  store,
  path,
}: {
  store: store;
  path: string;
}) {
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>
        {store?.title} | {BLOG_TITLE}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Facebook Meta Tags */}
      <meta
        property="og:url"
        content={`https://junghyeonsu.com/posts/${store.id}`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={`${store?.title} | ${BLOG_TITLE}`}
      />
      <meta property="og:title" content={`${store?.title} | ${BLOG_TITLE}`} />
      <meta property="og:description" content={store?.openGraph.description} />
      <meta property="og:image" content={store?.openGraph.image} />

      {/*  Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={DOMAIN} />
      <meta
        property="twitter:url"
        content={`https://${DOMAIN}/article?id=${store.id}`}
      />
      <meta name="twitter:title" content={`${store?.title} | ${BLOG_TITLE}`} />
      <meta name="twitter:description" content={store?.twitter.description} />
      <meta
        name="twitter:image"
        content={`${DOMAIN}${store?.twitter.image}`}></meta>
      <meta name="twitter:label1" content="Category" />
      <meta name="twitter:data1" content={`개발 | ${store.tags.join(' | ')}`} />
      <meta
        name="article:published_time"
        content={`${store?.date.toString().replace(/[/]/g, '-')}T09:00:00.000Z`}
      />
    </Head>
  );
}
