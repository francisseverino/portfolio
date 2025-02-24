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
  title: 'Create Next App',
  description: 'Generated by create next app',
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
