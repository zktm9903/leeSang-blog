import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Roboto } from 'next/font/google';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-_black text-_white test-sm flex justify-center font-light`}>
        <main className="w-full max-w-[600px] px-4">
          <Header />
          <Divider mb />
          {children}
          <Divider mt />
          <Footer />
        </main>
      </body>
    </html>
  );
}

function Divider({ mt, mb }: { mt?: boolean; mb?: boolean }) {
  return (
    <div
      className={`${mt && 'mt-3'} ${mb && 'mb-3'} bg-_gray h-[1px] rounded-lg`}
    />
  );
}
