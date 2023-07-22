import React from "react";

const RecentProjects = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <h2>
        Recent <span className="text-[#0EA5E9]">Projects</span>
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-row bg-gray-50 mt-4 gap-4 dark:bg-slate-800 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">
        <div className="md:w-1/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            className="w-16 md:w-32 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3>Project 1</h3>
            <div className=" flex text-white text-sm h-6 px-2 items-center rounded-full bg-red-500">
              E-Commerce/Full-Stack
            </div>
          </div>
          <p className="text-justify">
            This website utilizes cutting-edge technologies like Next.js and
            Tailwind CSS for superior performance and responsive design. Content
            management is streamlined using Sanity as a headless CMS, and
            GraphQL ensures efficient data retrieval. With robust security,
            state management, and optimization techniques, we offer a seamless
            and enjoyable shopping experience to our customers.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row bg-gray-50 mt-4 gap-4 dark:bg-slate-800 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">
        <div className="md:w-1/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            className="w-16 md:w-32 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3>Project 2</h3>
            <div className=" flex text-white h-6 text-sm px-2 items-center rounded-full bg-yellow-500">
              Blockchain/Solidity
            </div>
          </div>
          <p className="text-justify">
            This blockchain voting website employs advanced technologies like
            blockchain for tamper resistance and transparency. Smart contracts
            automate voting processes, while cryptographic encryption ensures
            privacy and security. With decentralized storage and consensus
            mechanisms, we offer a trustworthy and user-friendly platform for
            secure elections
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row bg-gray-50 mt-4 gap-4 dark:bg-slate-800 p-4 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">
        <div className="md:w-1/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.5"
            stroke="currentColor"
            className="w-16 md:w-32 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3>Project 3</h3>
            <div className=" flex text-white px-2 h-6 text-sm items-center text-center rounded-full bg-pink-500">
              Blogs/Full-Stack
            </div>
          </div>
          <p className="text-justify">
            This website is crafted using cutting-edge technologies such as
            Next.js, Sanity, and Tailwind CSS. Next.js enables fast loading
            times and SEO optimization, while Sanity serves as a flexible
            headless CMS for content management. Tailwind CSS streamlines design
            with utility-first classes, creating a responsive and user-friendly
            interface. Together, these technologies deliver a seamless and
            enjoyable blogging experience for readers and authors alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
