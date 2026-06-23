import Head from "next/head";
import type { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/Layout";
import { getAllPosts, getPostBySlug, type PostMeta } from "@/lib/posts";

interface Props {
  meta: PostMeta;
  mdxSource: MDXRemoteSerializeResult;
}

export default function PostPage({ meta, mdxSource }: Props) {
  return (
    <>
      <Head>
        <title>{meta.title} — Tejas Patnaik</title>
        <meta name="description" content={meta.excerpt} />
      </Head>
      <Layout>
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            &larr; Back to writing
          </Link>
          <time className="mb-2 block text-sm text-zinc-500">
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mb-10 text-4xl font-bold tracking-tight text-zinc-100">
            {meta.title}
          </h1>
          <div className="prose">
            <MDXRemote {...mdxSource} />
          </div>
        </article>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { meta, content } = getPostBySlug(params!.slug as string);
  const mdxSource = await serialize(content);
  return { props: { meta, mdxSource } };
};
