import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "i.me | Home",
  description: "Innocent Masuki Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}
