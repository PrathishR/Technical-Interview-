"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  Circle, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Flame, 
  Tag, 
  AlertCircle 
} from "lucide-react";
import { Question } from "@/data/topics";

interface QuestionCardProps {
  question: Question;
  index: number;
  isPracticed: boolean;
  onTogglePracticed: (id: string) => void;
}

export default function QuestionCard({
  question,
  index,
  isPracticed,
  onTogglePracticed,
}: QuestionCardProps) {
  const [showHint, setShowHint] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(question.title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryBadgeClass = (category: Question["category"]) => {
    switch (category) {
      case "Very Important":
        return "bg-rose-50 text-rose-700 border-rose-200 font-semibold";
      case "Important":
        return "bg-amber-50 text-amber-700 border-amber-200 font-medium";
      case "Standard":
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 bg-white p-5 sm:p-6 shadow-sm ${
        isPracticed
          ? "border-emerald-300 bg-emerald-50/20"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Index Counter */}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
            {index + 1}
          </span>

          {/* Category Badge */}
          <span
            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs border ${getCategoryBadgeClass(
              question.category
            )}`}
          >
            {question.category === "Very Important" && (
              <Flame className="h-3 w-3 text-rose-500 fill-rose-500" />
            )}
            {question.category}
          </span>

          {/* Subtopic */}
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
            <Tag className="h-3 w-3 text-slate-400" />
            {question.subtopic}
          </span>
        </div>

        {/* Quick Action: Copy Question for Mock Interviewing */}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-700 transition px-2 py-1 rounded hover:bg-slate-100"
          title="Copy question text to practice with peers"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Main Question Text (Prominent, clear typography) */}
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
        {question.title}
      </h3>

      {/* Recruiter Note if present */}
      {question.recruiterNote && (
        <div className="mt-2.5 flex items-start gap-1.5 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
          <AlertCircle className="h-3.5 w-3.5 text-slate-400 mt-0.5 shrink-0" />
          <span>
            <strong className="text-slate-700 font-medium">Recruiter Context:</strong> {question.recruiterNote}
          </span>
        </div>
      )}

      {/* Active Thinking Reminder Notice - Strictly No Direct Solution */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        {/* Toggle Hint Button */}
        <button
          type="button"
          onClick={() => setShowHint(!showHint)}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
            showHint
              ? "bg-amber-100/70 text-amber-900"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          <Lightbulb className={`h-3.5 w-3.5 ${showHint ? "text-amber-600 fill-amber-500" : "text-slate-500"}`} />
          <span>{showHint ? "Hide Conceptual Hint" : "Toggle Hint"}</span>
          {showHint ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>

        {/* Mark as Practiced Button */}
        <button
          type="button"
          onClick={() => onTogglePracticed(question.id)}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
            isPracticed
              ? "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
              : "border border-slate-300 text-slate-700 hover:bg-slate-50 active:scale-95"
          }`}
        >
          {isPracticed ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              <span>Practiced</span>
            </>
          ) : (
            <>
              <Circle className="h-4 w-4 text-slate-400" />
              <span>Mark as Practiced</span>
            </>
          )}
        </button>
      </div>

      {/* Thought-starter Hint Container (Enforces Question-Only Policy - Key terms, NO code spoilers) */}
      {showHint && (
        <div className="mt-3 rounded-xl bg-amber-50/80 border border-amber-200/80 p-3.5 text-xs text-amber-900 animate-in fade-in duration-150">
          <div className="flex items-center gap-1.5 font-semibold text-amber-950 mb-1">
            <Lightbulb className="h-3.5 w-3.5 text-amber-600 fill-amber-600" />
            <span>Interview Thought-Starter (Key Discussion Angles)</span>
          </div>
          <p className="leading-relaxed text-amber-900/90 pl-5">
            {question.hint}
          </p>
          <div className="mt-2 pl-5 text-[11px] text-amber-800/70 italic">
            *Tip: Try speaking your explanation out loud or writing down the outline before looking up references!
          </div>
        </div>
      )}
    </div>
  );
}
