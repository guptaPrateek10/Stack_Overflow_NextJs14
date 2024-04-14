import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import "./globals.css";
import { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});
export const metaData: Metadata = {
  title: "Dev OverFlow",
  description: "A place for developers to ask questions and find answers",
  icons: {
    icon: "assets/images/site-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <h1 className="h1-bold">This is new text</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
