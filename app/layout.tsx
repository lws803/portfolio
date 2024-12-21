import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { CSPostHogProvider } from "./providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Wilson Ler | Software Engineer & Co-founder",
  description:
    "Technical Co-founder of Beloga, former Engineering Manager at Constructor. " +
    "Building AI-powered tools for knowledge workers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={`${spaceGrotesk.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
        >
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
