import type { Metadata } from "next";
import "./globals.css";

import {geistSans, geistMono} from "@/fonts/fonts";
import Image from "next/image";
import bgImg from "../../public/assets/auth/authentication.svg";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    manifest: '/manifest.json',
  title: "Dorea",
  description: "Application de suivie des Eglises",
    icons: {
      icon: './favicon.ico'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <ReactQueryClientProvider>
      <div className={`w-full flex`}>
        {children}
        <Toaster />
        <div className={'flex-1 hidden w-full min-h-screen sm:flex justify-center items-center bg-custom_orange-fifth'}>
          <Image src={bgImg} alt={''} className={'w-full'}/>
        </div>
      </div>
    </ReactQueryClientProvider>
    </body>
    </html>
);
}
