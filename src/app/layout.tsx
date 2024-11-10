import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const googleMono = localFont({
  src: "./fonts/Teko-SemiBold.ttf",
  variable: "--font-google-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ankit Patel | Web-Developer",
  description: "I am Ankit, a passionate web developer with a strong background in creating innovative and efficient solutions. Feel free to connect with me for any inquiries or collaborations! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${googleMono.variable} antialiased bg-neutral-950 `}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
