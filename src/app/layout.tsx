import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import MobileSplash from "./components/MobileSplash";


export const metadata: Metadata = {
  title: "VimKeyboard",
  description: "created by jjcx",
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
