import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-16">
      <div className="mx-auto flex max-w-3xl flex-col-reverse items-center gap-10 px-6 py-24 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-600">
            Hello, I&apos;m
          </p>
          <h1 className="mb-5 text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl">
            Tejas Patnaik
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-zinc-600">
            Student at Harvard interested in software, systems, and building
            things that matter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/headshot.png`}
            alt="Tejas Patnaik"
            width={240}
            height={234}
            priority
            className="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
