import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  Compass, 
  Users, 
  Brain, 
  Terminal, 
  ShieldCheck 
} from "lucide-react";

export default function AboutPage() {
  const interviewStages = [
    {
      step: "01",
      title: "Online Assessment (OA)",
      focus: "Aptitude, DSA & Core MCQs",
      detail: "Speed and precision on DSA arrays, strings, basic graphs, and speed tests on OOP/SQL MCQs.",
    },
    {
      step: "02",
      title: "Technical Round 1",
      focus: "Core CS & Language Fundamentals",
      detail: "In-depth verbal probing on Java memory, OOP abstraction vs encapsulation, SQL joins, and Git commands.",
    },
    {
      step: "03",
      title: "Technical Round 2",
      focus: "Projects, Problem Solving & Architecture",
      detail: "Deep walk-through of your academic resume projects, Git branching, database schemas, and modern AI awareness.",
    },
    {
      step: "04",
      title: "Managerial & HR Fit",
      focus: "Communication & Situational Scenarios",
      detail: "Conflict handling in college group projects, Agile teamwork understanding, and career aspirations.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="text-xs font-semibold text-indigo-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        {/* Hero Mission Statement */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-semibold text-indigo-700 mb-4">
            <GraduationCap className="h-4 w-4" />
            <span>Mission for College Freshers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging the Gap Between Classroom Theory and Recruiter Expectations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            FresherPrep was conceived to solve a critical problem facing college freshers: engineering students spend months studying syntax and memorizing long textbook answers, yet freeze during campus technical interviews when asked to explain a concept in simple, natural English.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-indigo-600 font-bold text-lg">Fresher Focus</div>
              <div className="text-xs text-slate-600 mt-1">
                Customized for upcoming campus seasons, on-campus recruitments, and off-campus drives.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-indigo-600 font-bold text-lg">Zero Cheat-Sheets</div>
              <div className="text-xs text-slate-600 mt-1">
                Strict active-recall question format to strengthen mental neural pathways.
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-indigo-600 font-bold text-lg">7 Core Hubs</div>
              <div className="text-xs text-slate-600 mt-1">
                Java, SQL Databases, Project Defense, Git, GenAI, Agile/SDLC, and OS/Networking.
              </div>
            </div>
          </div>
        </div>

        {/* The Active Recall Philosophy */}
        <section id="methodology" className="mt-12 rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Our Methodology
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
              Why We Show Questions ONLY
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              When study portals provide instant answers underneath every question, students experience the <strong className="text-slate-900 font-medium">Illusion of Competence</strong>: reading a solution and believing they could easily formulate it themselves.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">1. Stimulates Active Neural Retrieval</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Seeing only the prompt forces you to search your memory, structure bullet points, and identify your actual knowledge gaps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">2. Mimics Real Interview Pressure</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Interviewers ask questions without providing a multiple-choice hint. Practicing with plain questions conditions you for this exact setting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">3. Conceptual Hints Without Spoilers</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    When you are truly stuck, our &quot;Toggle Hint&quot; provides key discussion angles and keywords—without giving away a pre-packaged script.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fresher Campus Placement Hiring Stages */}
        <section className="mt-12 rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Campus Blueprint
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
              The 4 Stages of Fresher Hiring
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Understanding the hiring pipeline helps you allocate study hours to the rounds where freshers face the highest elimination rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interviewStages.map((stage) => (
              <div
                key={stage.step}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      Stage {stage.step}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{stage.focus}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{stage.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {stage.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Ready to test your knowledge?</h4>
              <p className="text-xs text-slate-500">Pick any subject and start self-testing today.</p>
            </div>
            <Link
              href="/topics"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-indigo-700 transition"
            >
              <span>Explore Topics Grid</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
