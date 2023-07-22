import { client } from "../lib/sanity";
import { Testimonial } from "../lib/interface";
import Image from "next/image";

async function getData() {
  const query = `*[_type=='testimonial']`;
  const data = await client.fetch(query);
  return data;
}

export default async function TestimonialBox() {
  const data = (await getData()) as Testimonial[];
  return (
    <div className=" dark:bg-gray-900 p-8 rounded-3xl md:rounded-[64px] md:py-16 my-20">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-12 md:p-10 md:px-10">
        <div className="relative flex flex-col w-full md:w-1/2 justify-center items-center">
          <span className="absolute rotate-180 -top-8 md:-left-10 opacity-20">
            <Image src="/quote.png" alt="quote" width={32} height={32} />
          </span>
          <h4 className="text-justify">
            When it comes to frontend development, Akshya Kumar KC is a true
            professional. As a freelancer, he has demonstrated exceptional
            skills and a strong work ethic on every project he's been a part of.
            Akshya's attention to detail and passion for his craft shine through
            in the exceptional websites and applications he creates. His ability
            to seamlessly integrate into our team and work collaboratively has
            made a significant impact on our project outcomes. If you're looking
            for a highly skilled and dependable frontend developer, Akshya
            should be your first choice.
          </h4>
          <span className="absolute -bottom-8 md:right-0 opacity-20">
            <Image src="/quote.png" alt="quote" width={32} height={32} />
          </span>
        </div>
        <div className="flex flex-col mt-8 justify-center items-center">
          <Image
            src="/akshya.jpg"
            alt=""
            width={160}
            height={160}
            className="hidden md:flex md:rounded-full md:border-2 md:border-white"
          />
          <h3 className="text-[#0EA5E9]">Zark Muckerferg</h3>
          <h4 className="text-[#0EA5E9]">Managing Director, Neta Group</h4>
        </div>
      </div>
    </div>
  );
}
