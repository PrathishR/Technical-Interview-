"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, ShieldCheck } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Do not render footer on home page as requested
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Platform Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                <GraduationCap className="h-4 w-4" />
              </div>
              <span className="font-bold text-slate-900 text-lg tracking-tight">
                Fresher<span className="text-indigo-600">Prep</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              An active-recall question repository designed specifically for college freshers preparing for on-campus & off-campus technical interviews. Focused on fundamental clarity, confidence, and real interview discussions.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Strict Question-Only Active Recall (No Cheat Memorization)</span>
            </div>
          </div>

          {/* Core Tracks */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Interview Tracks
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/topics/java" className="text-slate-600 hover:text-indigo-600 transition">
                  Java & OOP Foundations
                </Link>
              </li>
              <li>
                <Link href="/topics/sql" className="text-slate-600 hover:text-indigo-600 transition">
                  SQL & Databases
                </Link>
              </li>
              <li>
                <Link href="/topics/project" className="text-slate-600 hover:text-indigo-600 transition">
                  Project Defense: Zero to Hero
                </Link>
              </li>
              <li>
                <Link href="/topics/behavioral" className="text-slate-600 hover:text-indigo-600 transition">
                  Behavioral &amp; HR Interview
                </Link>
              </li>
              <li>
                <Link href="/topics/git" className="text-slate-600 hover:text-indigo-600 transition">
                  Git &amp; Team Collaboration
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
              Campus Roadmap
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-indigo-600 transition">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-slate-600 hover:text-indigo-600 transition">
                  All Core Subjects Hub
                </Link>
              </li>
              <li>
                <Link href="/about#methodology" className="text-slate-600 hover:text-indigo-600 transition">
                  Why Question-Only Works
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} FresherPrep. Built with clean code for aspiring software engineers.</p>
          <div className="flex items-center gap-1">
            <span>Crafted for engineering students worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
