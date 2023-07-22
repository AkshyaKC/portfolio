"use client";
import "./testpage.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const RecentProject2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".line", { background: "#0EA5E9" });

    const animation = gsap.fromTo(
      ".line",
      { y: -100 },
      { y: 200, ease: "none", duration: 1, stagger: 0.7 }
    );

    ScrollTrigger.create({
      trigger: ".lineSections",
      start: "top 300",
      end: "bottom 300",
      markers: false,
      animation: animation,
      scrub: 1,
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mt-32">
      <div className="w-1/3">
        <h1>Recent Projects</h1>
      </div>
      <div className="lineSections flex flex-col w-full bg-white dark:bg-gray-900">
        <div className="lineSection flex gap-2 p-0 py-4 md:p-4">
          <h1 className="text-[48px]">01</h1>
          <div className="lineHolder w-2 bg-slate-100 dark:bg-gray-800">
            <div className="line" />
          </div>
          <div>
            <div>
              <div className="flex gap-2 items-center">
                <h2>Project</h2>
                <div className=" flex text-white text-sm h-6 px-2 items-center rounded-full bg-red-500">
                  E-Commerce/Full-Stack
                </div>
              </div>
              <p className="text-justify">
                This website utilizes cutting-edge technologies like Next.js and
                Tailwind CSS for superior performance and responsive design.
                Content management is streamlined using Sanity as a headless
                CMS, and GraphQL ensures efficient data retrieval. With robust
                security, state management, and optimization techniques, we
                offer a seamless and enjoyable shopping experience to our
                customers.
              </p>
            </div>
          </div>
        </div>
        <div className="lineSection flex gap-2 p-0 py-4 md:p-4">
          <h1 className="text-[48px]">02</h1>
          <div className="lineHolder w-2 bg-slate-100 dark:bg-gray-800">
            <div className="line" />
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <h2>Project 2</h2>
                <div className=" flex text-white h-6 text-sm px-2 items-center rounded-full bg-yellow-500">
                  Blockchain/Solidity
                </div>
              </div>
              <p className="text-justify">
                This website utilizes cutting-edge technologies like Next.js and
                Tailwind CSS for superior performance and responsive design.
                Content management is streamlined using Sanity as a headless
                CMS, and GraphQL ensures efficient data retrieval. With robust
                security, state management, and optimization techniques, we
                offer a seamless and enjoyable shopping experience to our
                customers.
              </p>
            </div>
          </div>
        </div>
        <div className="lineSection flex gap-2 p-0 py-4 md:p-4">
          <h1 className="text-[48px]">03</h1>
          <div className="lineHolder w-2 bg-slate-100 dark:bg-gray-800">
            <div className="line" />
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <h2>Project 3</h2>
                <div className=" flex text-white px-2 h-6 text-sm items-center text-center rounded-full bg-pink-500">
                  Blogs/Full-Stack
                </div>
              </div>
              <p className="text-justify">
                This website utilizes cutting-edge technologies like Next.js and
                Tailwind CSS for superior performance and responsive design.
                Content management is streamlined using Sanity as a headless
                CMS, and GraphQL ensures efficient data retrieval. With robust
                security, state management, and optimization techniques, we
                offer a seamless and enjoyable shopping experience to our
                customers.
              </p>
            </div>
          </div>
        </div>
        <div className="lineSection flex gap-2 p-0 py-4 md:p-4">
          <h1 className="text-[48px]">04</h1>
          <div className="lineHolder w-2 bg-slate-100 dark:bg-gray-800">
            <div className="line" />
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <h2>Project 2</h2>
                <div className=" flex text-white h-6 text-sm px-2 items-center rounded-full bg-yellow-500">
                  Blockchain/Solidity
                </div>
              </div>
              <p className="text-justify">
                This website utilizes cutting-edge technologies like Next.js and
                Tailwind CSS for superior performance and responsive design.
                Content management is streamlined using Sanity as a headless
                CMS, and GraphQL ensures efficient data retrieval. With robust
                security, state management, and optimization techniques, we
                offer a seamless and enjoyable shopping experience to our
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject2;
