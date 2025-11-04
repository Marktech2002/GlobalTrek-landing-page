import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlobTrek - Your Next Adventure Awaits",
  description: "Discover unbeatable deals on flights, hotels, and experiences. Whether it's a beach holiday or a mountain trek, explore, compare, and book with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}