import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../public/styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'faithastoriadesign',
  description: 'Design sight',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <main>
          <div className="my-14">
            <Header />
          </div>

          <div className="mx-7 my-14 md:mx-20">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
