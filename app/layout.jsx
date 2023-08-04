import Navigation from "@/components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script'
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media App",
  description: "Social Media App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/b862c27f27.js" crossOrigin="anonymous"></Script>
      </head>
      <body className={inter.className}>
        <Navigation />
        <div className="min-h-screen flex flex-col justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
