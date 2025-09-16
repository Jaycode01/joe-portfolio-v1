import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexon | Software Developer",
  description:
    "A conversion-based software developer, I don't only build pretty softwares - they perform too.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
