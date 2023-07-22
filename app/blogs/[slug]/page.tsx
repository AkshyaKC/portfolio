import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityimageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image src={urlFor(value).url()} alt="Image" width={800} height={800} />
      ),
    },
  };
  return (
    <div className="p-4 md:p-16 md:px-32">
      <header>
        <div className="space-y-1">
          <p>{new Date(data._createdAt).toISOString().split("T")[0]}</p>
        </div>
        <div>
          <h2>{data.title}</h2>
        </div>
      </header>
      <div className="my-4">
        <h3 className="text-justify">{data.overview}</h3>
      </div>
      <div className="text-justify">
        <PortableText value={data.content} components={PortableTextComponent} />
      </div>
    </div>
  );
}
