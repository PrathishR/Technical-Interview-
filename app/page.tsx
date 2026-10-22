import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-slate-50 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-16 sm:py-24">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight sm:leading-none">
          Zero Rote Learning. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            Pure Interview Dominance.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Master the exact questions top recruiters ask in campus drives. Train your mental recall across Java, SQL, and System Projects—so you speak like an engineer, not a student.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/topics"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition active:scale-95"
          >
            <span>Explore Topics</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <span>About me</span>
          </Link>
        </div>

        {/* Micro Stats Banner */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900">8</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Core Tech &amp; HR Tracks</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900">100%</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Question-Only Focus</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-slate-900">Freshers</div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Campus Placement Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
}
