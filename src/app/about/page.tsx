import Link from "next/link";
import { posts } from "./data/posts";

interface PostProps {
  post: {
    title: string;
    body: string;
    slug: string;
  };
}

export default function About() {
  return (
    <div className="container max-w-1/2 mx-auto">
      <ul className="mx-auto w-3/5">
        {posts &&
          posts.map((post) => {
            return <PostLink post={post} key={post.slug} />;
          })}
      </ul>
    </div>
  );
}

const PostLink = ({ post }: PostProps) => {
  return (
    <li className="border border-b-secondary border-t-transparent border-l-transparent border-r-transparent py-4">
      <Link href={`/about/${post.slug}`} className="font-serif text-2xl hover:text-secondary transition-colors">{post.title}</Link>
      <p className="mt-2">Erin Horn</p>
    </li>
  );
};
