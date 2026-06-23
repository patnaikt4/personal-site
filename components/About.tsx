import { motion } from "framer-motion";

const skills = [
  "Python", "TypeScript", "JavaScript", "SQL", "R",
  "React", "Next.js", "Node.js", "Express.js", "FastAPI", "Dash",
  "PyTorch", "Scikit-learn", "Pandas", "NumPy",
  "OpenAI APIs", "RAG Pipelines", "NLP",
  "PostgreSQL", "Supabase", "Vector Databases", "FAISS",
  "Docker", "Git", "ETL", "RESTful APIs",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900">
            About
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-zinc-600">
            <p>
              I&apos;m a sophomore at Harvard (Class of 2028) pursuing a joint
              concentration in Computer Science and Statistics. I work across
              the full stack — from ML pipelines and data engineering to
              product-facing UIs — with a focus on building things that work in
              production.
            </p>
            <p>
              I&apos;ve shipped software at trading firms, nonprofits, public health
              institutions, and federal agencies. Outside of work I&apos;m involved
              in Harvard Tech for Social Good, the Data Analytics Group, and the
              Machine Intelligence Community.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-200 bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
