"use client";

import { useState, useEffect } from "react";
import { Question, QuestionCategory } from "@/data/topics";
import QuestionCard from "./QuestionCard";
import { Search, Filter, CheckCircle2, RotateCcw, AlertTriangle, Sparkles } from "lucide-react";

interface QuestionListProps {
  topicId: string;
  topicTitle: string;
  questions: Question[];
}

export default function QuestionList({ topicId, topicTitle, questions }: QuestionListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [practicedIds, setPracticedIds] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  // Load practiced questions from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(`practiced_${topicId}`);
      if (saved) {
        setPracticedIds(new Set(JSON.parse(saved)));
      }
    } catch (e) {
      console.error("Failed to load practiced state", e);
    }
  }, [topicId]);

  // Save practiced questions to localStorage
  const togglePracticed = (questionId: string) => {
    setPracticedIds((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      try {
        localStorage.setItem(`practiced_${topicId}`, JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error("Failed to persist state", e);
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    if (confirm(`Reset practice progress for ${topicTitle}?`)) {
      setPracticedIds(new Set());
      try {
        localStorage.removeItem(`practiced_${topicId}`);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Filter questions based on category and search query
  const filteredQuestions = questions.filter((q) => {
    const matchesCategory =
      selectedCategory === "ALL" || q.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === "" ||
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.subtopic.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { label: "All Questions", value: "ALL", count: questions.length },
    {
      label: "Very Important",
      value: "Very Important",
      count: questions.filter((q) => q.category === "Very Important").length,
    },
    {
      label: "Important",
      value: "Important",
      count: questions.filter((q) => q.category === "Important").length,
    },
    {
      label: "Standard",
      value: "Standard",
      count: questions.filter((q) => q.category === "Standard").length,
    },
  ].filter((c) => c.value === "ALL" || c.count > 0);

  const totalCount = questions.length;
  const practicedCount = questions.filter((q) => practicedIds.has(q.id)).length;
  const progressPercent = totalCount > 0 ? Math.round((practicedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Progress & Accountability Tracker Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Self-Assessment Practice Tracker
              </h2>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                {mounted ? `${progressPercent}% Complete` : "0% Complete"}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Attempt to explain each concept out loud or on paper before marking it practiced.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="text-xs font-medium text-slate-600">
              <strong className="text-slate-900 font-bold text-sm">
                {mounted ? practicedCount : 0}
              </strong>{" "}
              of {totalCount} Practiced
            </span>
            {mounted && practicedCount > 0 && (
              <button
                type="button"
                onClick={handleResetProgress}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-rose-600 transition p-1"
                title="Reset progress"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
            style={{ width: `${mounted ? progressPercent : 0}%` }}
          />
        </div>
      </div>

      {/* Filter Toolbar: Categories & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  isSelected
                    ? "bg-white text-indigo-600 font-semibold shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] rounded-full px-1.5 py-0.2 ${
                    isSelected ? "bg-indigo-50 text-indigo-700" : "bg-slate-200/70 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or subtopics..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-white placeholder-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition shadow-sm"
          />
        </div>
      </div>

      {/* Questions Stack */}
      {filteredQuestions.length > 0 ? (
        <div className="space-y-4">
          {filteredQuestions.map((question, idx) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={idx}
              isPracticed={mounted ? practicedIds.has(question.id) : false}
              onTogglePracticed={togglePracticed}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-400">
            <Filter className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-sm font-semibold text-slate-900">
            No interview questions match your filter
          </h3>
          <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or selecting &quot;All Questions&quot; to see the full list.
          </p>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
