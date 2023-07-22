const MyProjects = () => {
  return (
    <div className="flex flex-col md:p-20">
      <div className="flex gap-10">
        <div>
          <p>Sort by:</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
          </svg>
        </div>
        <div>Filter by:</div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center  bg-gray-50 mt-4 gap-4 dark:bg-slate-800 p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2>Project 1</h2>
              <div className=" flex text-white text-sm h-6 px-2 items-center rounded-full bg-red-500">
                E-Commerce/Full-Stack
              </div>
            </div>
            <p>
              This website utilizes cutting-edge technologies like Next.js and
              Tailwind CSS for superior performance and responsive design.
              Content management is streamlined using Sanity as a headless CMS,
              and GraphQL ensures efficient data retrieval. With robust
              security, state management, and optimization techniques, we offer
              a seamless and enjoyable shopping experience to our customers.
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
        <div className="flex flex-col justify-center items-center bg-gray-50 mt-4 gap-4 dark:bg-slate-800 p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2>Project 1</h2>
              <div className=" flex text-white text-sm h-6 px-2 items-center rounded-full bg-red-500">
                E-Commerce/Full-Stack
              </div>
            </div>
            <p>
              This website utilizes cutting-edge technologies like Next.js and
              Tailwind CSS for superior performance and responsive design.
              Content management is streamlined using Sanity as a headless CMS,
              and GraphQL ensures efficient data retrieval. With robust
              security, state management, and optimization techniques, we offer
              a seamless and enjoyable shopping experience to our customers.
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
        <div className="flex flex-col justify-center items-center  bg-gray-50 mt-4 gap-4 dark:bg-slate-800 p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2>Project 1</h2>
              <div className=" flex text-white text-sm h-6 px-2 items-center rounded-full bg-red-500">
                E-Commerce/Full-Stack
              </div>
            </div>
            <p>
              This website utilizes cutting-edge technologies like Next.js and
              Tailwind CSS for superior performance and responsive design.
              Content management is streamlined using Sanity as a headless CMS,
              and GraphQL ensures efficient data retrieval. With robust
              security, state management, and optimization techniques, we offer
              a seamless and enjoyable shopping experience to our customers.
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
        <div className="flex flex-col justify-center items-center bg-gray-50 mt-4 gap-4 dark:bg-slate-800 p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-16 h-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2>Project 1</h2>
              <div className=" flex text-white text-sm h-6 px-2 items-center rounded-full bg-red-500">
                E-Commerce/Full-Stack
              </div>
            </div>
            <p>
              This website utilizes cutting-edge technologies like Next.js and
              Tailwind CSS for superior performance and responsive design.
              Content management is streamlined using Sanity as a headless CMS,
              and GraphQL ensures efficient data retrieval. With robust
              security, state management, and optimization techniques, we offer
              a seamless and enjoyable shopping experience to our customers.
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
      </div>
    </div>
  );
};

export default MyProjects;
