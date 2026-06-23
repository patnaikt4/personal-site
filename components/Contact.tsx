import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg text-zinc-600">
            I&apos;m always open to interesting conversations, project ideas, or just
            saying hi.
          </p>
          <a
            href="mailto:tejaspatnaik@college.harvard.edu"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Send me an email
          </a>
          <div className="mt-8 flex justify-center gap-8">
            <a
              href="https://github.com/patnaikt4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-patnaik-840b25279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-700"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
