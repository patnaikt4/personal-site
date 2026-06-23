import Head from "next/head";
import type { GetStaticProps } from "next";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, type PostMeta } from "@/lib/posts";

interface Props {
  posts: PostMeta[];
}

export default function BlogIndex({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Writing — Tejas Patnaik</title>
        <meta name="description" content="Writing by Tejas Patnaik." />
      </Head>
      <Layout>
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-100">
            Writing
          </h1>
          {posts.length === 0 ? (
            <p className="text-zinc-500">No posts yet.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};
