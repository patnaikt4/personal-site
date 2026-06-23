import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Tejas Patnaik</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-400">
            404
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-100">
            Page not found
          </h1>
          <p className="mb-8 text-zinc-400">That page does not exist.</p>
          <Link
            href="/"
            className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Go home &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
