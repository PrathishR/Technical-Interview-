"use client";

import { useState } from "react";
import Link from "next/link";
import { TOPICS } from "@/data/topics";
import TopicCard from "@/components/TopicCard";
import { Search, Sparkles, BookOpen, Layers, CheckCircle2 } from "lucide-react";

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = TOPICS.filter((topic) => {
    const q = searchQuery.toLowerCase();
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.tagline.toLowerCase().includes(q) ||
      topic.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  const totalQuestions = TOPICS.reduce((acc, t) => acc + t.questions.length, 0);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Tag */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="text-xs font-semibold text-indigo-600 hover:underline">
            ← Back to Home
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3 w-3" />
            <span>{TOPICS.length} Core Interview Tracks</span>
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interview Topics
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Curated fresher tracks covering Java, SQL, Project Defense, Behavioral &amp; HR, Git &amp; GitHub, AI/GenAI, SDLC &amp; Agile, and OS &amp; Networks.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search subjects or tags..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white placeholder-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm transition"
            />
          </div>
        </div>

        {/* Quick Highlights / Stats Strip */}
        <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Core Subjects</div>
              <div className="text-sm font-bold text-slate-900">{TOPICS.length} Modules</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Curated Questions</div>
              <div className="text-sm font-bold text-slate-900">{totalQuestions} High-Yield</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Answers Policy</div>
              <div className="text-sm font-bold text-slate-900">Questions Only</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Target Audience</div>
              <div className="text-sm font-bold text-slate-900">College Freshers</div>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center my-6">
            <p className="text-sm font-semibold text-slate-800">
              No technical subjects match &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
