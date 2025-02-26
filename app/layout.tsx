import type { Metadata } from 'next';
import { Manrope, Unbounded } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});
const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Francis Severino | Full-Stack Engineer',
  description:
    'Full-Stack Engineer with 4+ years of experience building high-performance, scalable applications using React, Django, Python, and AWS.',
  keywords:
    'Full-Stack Developer, Software Engineer, React, Django, Node.js, AWS, TypeScript, Python, Scalable Systems, Web Development, Backend Engineer',
  authors: [{ name: 'Francis Severino', url: 'https://francisseverino.com' }],
  creator: 'Francis Severino',
  openGraph: {
    title: 'Francis Severino | Full-Stack Engineer',
    description:
      'Building high-performance, scalable applications using React, Django, Python, and AWS.',
    url: 'https://francisseverino.com',
    siteName: 'Francis Severino Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francis Severino | Full-Stack Engineer',
    description:
      'Building high-performance, scalable applications using React, Node.js, Python, and AWS.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.variable} ${unbounded.variable} bg-gray-900 text-white font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
