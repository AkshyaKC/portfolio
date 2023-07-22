import Link from "next/link";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type=='post']`;
  const data = await client.fetch(query);
  return data;
}
export default async function Blog() {
  const data = (await getData()) as Post[];
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>
        Recent <span className="text-[#0EA5E9]">Blogs</span>
      </h2>
      <ul className="grid grid-cols-1 justify-center md:grid-cols-3 gap-4 md:gap-6 md:p-6 md:px-16 ">
        {data.map((post) => (
          <li
            key={post._id}
            className="bg-gray-50 rounded-md p-4 md:p-6 pb-2 drop-shadow-md dark:bg-slate-900  hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <article className="grid gap-4">
              <div>
                <Image
                  src="/blog-img.jpg"
                  width={40}
                  height={20}
                  alt="Blog-img"
                  className="rounded-md w-full h-40"
                />
                <Link href={`/blogs/${post.slug.current}`} prefetch>
                  <h3 className="text-base my-2">{post.title}</h3>
                  <p className="line-clamp-4 text-justify text-sm">
                    {post.overview}
                  </p>
                </Link>
              </div>
              <div className="flex justify-between dark:text-slate-500">
                <p>{post.authorName}</p>
                <p>{new Date(post._createdAt).toISOString().split("T")[0]}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
