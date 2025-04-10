import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "meowpa.ws",
    template: "%s | meowpa.ws"
  },
  description: "Welcome on personal website of kvba, here you will find various information about me, including projects, links to social media and more! I hope you'll stay for longer by following me on other platforms!",
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#000000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        {children}
      </body>
    </html>
  );
}
