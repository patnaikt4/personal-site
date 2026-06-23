import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Capital One",
    role: "Data Science Intern",
    period: "Incoming Summer 2026",
  },
  {
    company: "Harvard University",
    role: "CS50 Teaching Fellow",
    period: "May 2026 – Present",
  },
  {
    company: "All Star Code",
    role: "Lead Software Engineer",
    period: "Jan 2026 – Present",
  },
  {
    company: "One Degree",
    role: "Software Engineering Consultant",
    period: "Aug 2025 – Jan 2026",
    bullets: [
      "Built AI-powered data standardization service using Python, OpenAI APIs, and schema-driven validation",
      "Designed fault-tolerant LLM pipeline with retries, structured outputs, and deterministic prompts",
      "Developed modular backend services for parsing, transformation, and taxonomy mapping",
      "Implemented validation layer enforcing JSON schema across organization metadata stored in Supabase",
    ],
  },
  {
    company: "Trillium Trading",
    role: "Data Science Intern",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Built ML-powered order-book classification pipeline using CNNs in Python, improving signal precision by 30%",
      "Developed full-stack analytics dashboards (Dash + REST APIs + SQL) used by 200+ traders in production with Redis to reduce latency",
      "Engineered real-time data ingestion pipelines for order flow and market microstructure features",
      "Designed interactive visualization tools with dynamic callbacks for trader performance monitoring",
    ],
  },
  {
    company: "Harvard T.H. Chan School of Public Health",
    role: "Gen AI / Data Analytics Researcher",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Built end-to-end analytics pipeline processing procurement data across 100+ municipalities",
      "Implemented statistical modeling workflows with regression, clustering, and hypothesis testing",
      "Contributed AI-driven recommendations to World Food Programme policy report",
      "Presented findings to 150+ stakeholders including product and executive teams",
    ],
  },
  {
    company: "Center for Disease Control and Prevention (CDC)",
    role: "Software Engineering Consultant",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Developed full-stack RAG chatbot using React, Node.js, OpenAI APIs, and vector search",
      "Built document ingestion pipeline with embeddings, chunking, and semantic retrieval",
      "Implemented UI components for citation display, search refinement, and conversation history",
      "Reduced manual policy lookup workload by 50% across CDC internal users",
    ],
  },
  {
    company: "Renaissance Learning",
    role: "Data Engineering Intern",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Built ETL pipelines processing 3M+ rows using Python and SQL for nonprofit spending analysis",
      "Automated reporting workflows with modular data transformation scripts",
      "Developed visualization dashboards for executive insights and trend analysis",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative border-l border-zinc-200 pl-6"
              >
                <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-zinc-300 bg-white" />
                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-semibold text-zinc-800">{item.company}</span>
                  <span className="text-xs text-zinc-400">{item.period}</span>
                </div>
                <p className="mb-3 text-sm font-medium text-indigo-600">{item.role}</p>
                {item.bullets && (
                  <ul className="space-y-1.5">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm text-zinc-600">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
