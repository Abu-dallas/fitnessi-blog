import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPage";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const filepath = path.join(process.cwd(), "database", "db.json");
  const filecontent = fs.readFileSync(filepath, "utf-8");
  const posts = JSON.parse(filecontent);
  return posts.map((post) => ({ id: post.slug }));
}

async function BlogPage({ params }) {
  const { id } = await params;
  const filepath = path.join(process.cwd(), "database", "db.json");
  const filecontent = fs.readFileSync(filepath, "utf-8");
  const posts = JSON.parse(filecontent);
  const post = posts.find((post) => post.slug === id);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}

export default BlogPage;
