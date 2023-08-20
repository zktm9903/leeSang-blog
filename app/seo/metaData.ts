import { Metadata } from 'next';
import { BLOG_TITLE, GENERATOR, URL } from '../constant/info';
import { store } from '../types/interface';

export default function metaData(content: store) {
  return {
    title: `${content.title} | ${BLOG_TITLE}`,
    description: content.description,
    generator: GENERATOR,
    applicationName: BLOG_TITLE,
    referrer: 'origin',
    keywords: content.tags,
    authors: [{ name: 'Lee' }, { name: 'Sangcheol', url: URL }],
    colorScheme: 'dark',
    creator: GENERATOR,
    publisher: GENERATOR,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: `${content.title} | ${BLOG_TITLE}`,
      description: content.description,
      url: URL,
      siteName: BLOG_TITLE,
      images: [
        {
          url: content.img,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: content.date.toISOString(),
      authors: ['Sangcheol', 'Lee'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/angCat.png',
      shortcut: '/angCat.png',
      apple: '/angCat.png',
      other: {
        rel: 'angCat.png',
        url: '/angCat.png',
      },
    },
    themeColor: 'black',
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    appleWebApp: {
      title: `${content.title} | ${BLOG_TITLE}`,
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/angCat.png',
        {
          url: '/angCat.png',
          media: '(device-width: 768px) and (device-height: 1024px)',
        },
      ],
    },
    category: content.category,
  } as Metadata;
}
