import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import MobileSplash from "./components/MobileSplash";


export const metadata: Metadata = {
  title: "VimKeyboard",
  description: "Accelerate learning Vim Motions",
  openGraph: {
    title: "VimKeyboard",
    description: "Accelerate learning Vim Motions",
    url: "http://vim-keyboard.vercel.app",
    siteName: "VimKeyboard",
    images: [
      {
        url: "https://raw.githubusercontent.com/jjcxdev/vim/main/public/images/vimkeyboard.jpg",
        width: 1200,
        height: 630,
        alt: "VimKeyboard",
      },
    ],
    locale: "en_CANADA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MobileSplash />
        <div className="main-content">  {children}</div>
        <Analytics />
      </body>
    </html>
  );
}
