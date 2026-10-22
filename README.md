# FresherPrep — Technical Interview Preparation Platform

A modern, responsive, active-recall interview preparation platform crafted specifically for **college freshers** preparing for on-campus and off-campus technical drives.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **Strict Active-Recall Pedagogy**: Questions only on cards without direct spoiler solutions to force natural verbal formulation.
- **Thought-Starter Hints**: Clickable "Toggle Hint" reveals recruiter discussion angles, architecture keywords, and the STAR method without giving away a scripted answer.
- **Exact Category Tags**: Tagged by importance (`Very Important`, `Important`, and `Standard`).
- **Interactive Practice Tracking**: "Mark as Practiced" state persists across sessions using `localStorage` with a dynamic percentage tracker.
- **Fast Filter & Search**: Instant keyword search and category tabs on each subject track.

---

## 📚 Curriculum Tracks

1. **Core Java & OOP (150 Questions)**:
   - What is Java?, OOP Pillars, Constructors & Chaining, `this` vs `super`, Method Overloading vs Overriding, String Immutability & SCP, Collections Framework (`ArrayList`, `LinkedList`, `HashMap`, `TreeMap`, `ConcurrentHashMap`), Exception Handling, and Multithreading.
2. **SQL & Relational Databases (78 Questions across 10 Levels)**:
   - Levels 1–10: DDL/DML, Constraints, Joins, Aggregations, Subqueries, Indexing, ACID Transactions, and Complex Join output scenarios with interactive reference tables (`EMPLOYEE` & `DEPARTMENT`).
3. **Project Defense: Zero to Hero (20 Questions across 10 Levels)**:
   - Project Elevator Pitch, Tech Stack Justification, Architecture & Scalability, Database Schemas, Hardest Bugs & Production Pitfalls, and Engineering Roadmaps.
4. **Behavioral & HR Interview (15 Questions)**:
   - "Why should we hire you?", "Where do you see yourself in 5 years?", "Do you have any questions for us?", STAR method conflict resolution, handling failures, pressure management, and salary expectations.
5. **Git & GitHub Mastery (10 Questions)**:
   - Git workflow, Merge vs Rebase, Conflict Resolution, Git Cherry-pick, and Branching strategies.
6. **AI & GenAI Foundations (5 Questions)**:
   - Transformers & Attention mechanism, RAG vs Fine-Tuning, Vector Embeddings, LLM Hallucinations, and Prompt Engineering.
7. **SDLC & Agile Delivery (5 Questions)**:
   - Agile/Scrum ceremonies, Waterfall vs Agile, Sprint planning, Code reviews, and CI/CD pipelines.
8. **OS & Computer Networks (5 Questions)**:
   - Process vs Thread, Deadlocks & Banker's algorithm, TCP 3-Way Handshake, DNS to HTTP request flow, and Virtual Memory.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PrathishR/Technical-Interview-.git

# Navigate to project directory
cd Technical-Interview-

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State & Persistence**: Browser `localStorage`
