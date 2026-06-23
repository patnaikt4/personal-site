import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-zinc-700"
    >
      <time className="mb-2 block text-xs text-zinc-500">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h2 className="mb-2 text-lg font-semibold text-zinc-100 transition-colors group-hover:text-indigo-400">
        {post.title}
      </h2>
      <p className="text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
    </Link>
  );
}
