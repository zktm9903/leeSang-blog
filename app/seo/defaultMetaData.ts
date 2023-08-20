import { Metadata } from 'next';
import {
  BLOG_TITLE,
  CATEGORY,
  DESCRIPTION,
  GENERATOR,
  KEYWORDS,
  LOGO,
  URL,
} from '../constant/info';

export default function defaultMetaData() {
  return {
    title: BLOG_TITLE,
    description: DESCRIPTION,
    generator: GENERATOR,
    applicationName: BLOG_TITLE,
    referrer: 'origin',
    keywords: KEYWORDS,
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
      title: BLOG_TITLE,
      description: DESCRIPTION,
      url: URL,
      siteName: BLOG_TITLE,
      images: [
        {
          url: LOGO,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
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
      icon: LOGO,
      shortcut: LOGO,
      apple: LOGO,
      other: {
        rel: LOGO.slice(1),
        url: LOGO,
      },
    },
    themeColor: 'black',
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    appleWebApp: {
      title: BLOG_TITLE,
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/angCat.png',
        {
          url: '/angCat.png',
          media: '(device-width: 768px) and (device-height: 1024px)',
        },
      ],
    },
    category: CATEGORY,
  } as Metadata;
}
