import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ 
  weight: ["700", "400", "300", "100"], 
  subsets: ["latin"],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "DEPT Weather Planner",
  description: "DEPT Weather Planner - Created with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
