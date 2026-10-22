import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FresherPrep | Crack Your Fresher Technical Interviews",
  description:
    "A clean, recruiter-friendly technical interview preparation platform for college freshers. Active-recall questions across Java, SQL, Projects, Git, GenAI, SDLC, and OS.",
  keywords: [
    "fresher technical interview questions",
    "campus placement preparation",
    "fresher campus interviews",
    "core java interview questions",
    "sql interview questions for freshers",
    "project interview questions",
    "active recall interview questions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
