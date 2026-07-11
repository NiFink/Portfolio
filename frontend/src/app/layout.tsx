import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menubar from "../GlobalComponents/Menubar";

export const metadata: Metadata = {
  title: "Nils Fink — Front-End Developer | Portfolio",
  description:
    "Portfolio of Nils Fink — Media Informatics student in Stuttgart and front-end developer (Angular, React, Next.js, TypeScript). Projects, experience and contact.",
  openGraph: {
    title: "Nils Fink — Front-End Developer",
    description:
      "Media Informatics student & front-end developer (Angular, React, Next.js, TypeScript). Projects, experience and contact.",
  },
  icons: {
    icon: "/Pictures/Waves.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-rose-50 via-slate-200 to-indigo-200">
        <Menubar />
        {children}
      </body>
    </html>
  );
}
