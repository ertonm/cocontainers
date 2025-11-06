import type { Metadata } from "next";
import { Saira , Poppins } from 'next/font/google';
import Navbar from "./components/navbar";
import "./globals.css";
import "./components/navbar.module.css";
import FixCSSVars from './components/FixCSSVars';
import { CartButton } from './components/CartButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-poppins',
});

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '500', '600'],
  variable: '--font-saira',
});

export const metadata: Metadata = {
  title: "CO-Containers",
  description: "Affordable shipping containers since 2001.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable + ',' + saira.variable}>
        <Navbar />
        <FixCSSVars />
        <CartButton />
        {children}
      </body>
    </html>
  );
}
