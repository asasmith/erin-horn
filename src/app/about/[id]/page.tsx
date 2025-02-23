import { notFound } from "next/navigation";
import { posts } from "../data/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.slug }));
}

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = posts.find((post) => post.slug === id);

  if (!post) return notFound;

  const markup = { __html: post.body };

  const headerClasses =
    "[&>h1]:text-5xl [&>h1]:font-serif [&>h1]:font-semibold [&>h1]:mt-24 [&>h1]:mb-6 [&>h1]:capitalize";
  const bodyClasses =
    "[&>p]:mb-2 [&>ul>li]:mb-2 [&>ul>li>span]:font-semibold [&>p>span]:font-semibold [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:ml-4 [&>ol>li]:mb-2 [&>ol>li>span]:font-semibold";

  return (
    <div className="container mx-auto max-w-prose pb-12">
      <div
        dangerouslySetInnerHTML={markup}
        className={`${headerClasses} ${bodyClasses}`}
      />
    </div>
  );
}
