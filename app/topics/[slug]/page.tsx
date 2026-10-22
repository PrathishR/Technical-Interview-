import { notFound } from "next/navigation";
import Link from "next/link";
import { getTopicBySlug, getAllTopicSlugs } from "@/data/topics";
import QuestionList from "@/components/QuestionList";
import { 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Lightbulb, 
  Coffee, 
  GitBranch, 
  Database, 
  Network, 
  KanbanSquare, 
  FolderKanban,
  HelpCircle,
  Briefcase
} from "lucide-react";
import type { Metadata } from "next";

interface SubjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: SubjectPageProps): Metadata {
  const topic = getTopicBySlug(params.slug);
  if (!topic) {
    return { title: "Subject Not Found | FresherPrep" };
  }
  return {
    title: `${topic.title} Interview Questions | FresherPrep`,
    description: `High-yield ${topic.title} technical interview questions for fresher campus placements. Practice with active recall and conceptual hints.`,
  };
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  // Dynamic Icon
  const renderIcon = () => {
    const props = { className: "h-8 w-8 text-white" };
    switch (topic.iconName) {
      case "Coffee":
        return <Coffee {...props} />;
      case "GitBranch":
        return <GitBranch {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "KanbanSquare":
        return <KanbanSquare {...props} />;
      case "Database":
        return <Database {...props} />;
      case "Network":
        return <Network {...props} />;
      case "FolderKanban":
        return <FolderKanban {...props} />;
      default:
        return <HelpCircle {...props} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/topics" className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Subjects</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{topic.title}</span>
        </div>

        {/* Subject Header Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm shrink-0"
              style={{ backgroundColor: topic.colorTheme.accent }}
            >
              {renderIcon()}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {topic.title}
                </h1>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${topic.colorTheme.bgBadge}`}>
                  {topic.questions.length} Curated Questions
                </span>
              </div>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                {topic.overview}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Interviewer Pro-Tips Drawer */}
          {topic.interviewTips && topic.interviewTips.length > 0 && (
            <div className="mt-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900 mb-2">
                <Briefcase className="h-3.5 w-3.5 text-indigo-600" />
                <span>Recruiter Evaluation Criteria</span>
              </div>
              <ul className="space-y-1.5 text-xs text-indigo-950/80">
                {topic.interviewTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Level 10 Reference Tables for SQL */}
          {topic.id === "sql" && (
            <div className="mt-5 rounded-2xl bg-slate-900 text-slate-100 p-5 shadow-inner">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                <Database className="h-4 w-4" />
                <span>Reference Tables for Level 10 Join Questions</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-indigo-400 mb-1.5">EMPLOYEE Table</div>
                  <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`+--------+----------+---------+------------+
| emp_id | emp_name | dept_id | manager_id |
+--------+----------+---------+------------+
| 1      | Asha     | 10      | NULL       |
| 2      | Bharat   | 20      | 1          |
| 3      | Charu    | 10      | 1          |
| 4      | Deepak   | 30      | 2          |
| 5      | Esha     | NULL    | 2          |
| 6      | Farhan   | 40      | NULL       |
+--------+----------+---------+------------+`}
                  </pre>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-emerald-400 mb-1.5">DEPARTMENT Table</div>
                  <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`+---------+-------------+
| dept_id | dept_name   |
+---------+-------------+
| 10      | Engineering |
| 20      | HR          |
| 30      | Finance     |
| 50      | Marketing   |
+---------+-------------+`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* Strict Question-Only Reminder Notice */}
          <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 bg-amber-50/60 border border-amber-200/60 px-3.5 py-2 rounded-xl">
            <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0" />
            <span>
              <strong className="text-amber-900 font-medium">Question-Only Mode:</strong> Answers and code solutions are hidden to build genuine recall. Toggle hints for conceptual thought-starters.
            </span>
          </div>
        </div>

        {/* Interactive Questions Section with Category Filters, Search, and Progress Bar */}
        <QuestionList
          topicId={topic.id}
          topicTitle={topic.title}
          questions={topic.questions}
        />
      </div>
    </div>
  );
}
