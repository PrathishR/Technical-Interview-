import Link from "next/link";
import { 
  Coffee, 
  GitBranch, 
  Sparkles, 
  KanbanSquare, 
  Database, 
  Network, 
  FolderKanban,
  UserCheck,
  ArrowRight, 
  CheckCircle2, 
  HelpCircle 
} from "lucide-react";
import { Topic } from "@/data/topics";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  // Dynamic Lucide icon lookup
  const renderIcon = () => {
    const props = { className: "h-6 w-6 text-white" };
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
      case "UserCheck":
        return <UserCheck {...props} />;
      default:
        return <HelpCircle {...props} />;
    }
  };

  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-md"
    >
      <div>
        {/* Top Header with Icon and Question count */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-105"
            style={{ backgroundColor: topic.colorTheme.accent }}
          >
            {renderIcon()}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition">
            <span>{topic.questions.length} Questions</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">
          {topic.title}
        </h3>
        <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {topic.tagline}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {topic.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 border border-slate-100"
            >
              {tag}
            </span>
          ))}
          {topic.tags.length > 3 && (
            <span className="rounded-md bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 border border-slate-100">
              +{topic.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Link & Action */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-indigo-600">
        <span>View Questions</span>
        <div className="flex items-center gap-1 transition-transform group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
