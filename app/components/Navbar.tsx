import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="flex justify-between md:p-10 pb-0 sticky">
      <ThemeButton />
      <div className="hidden md:flex items-center justify-center gap-4">
        <ul className="flex gap-6 max-w-3xl">
          <li className="hover:underline cursor-pointer">
            <Link href={"/"} />
            About Me
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href={"/"} />
            Contact Me
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href={"/"} />
            My Projects
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href={"/"} />
            Blogs
          </li>
        </ul>
        <div className="flex gap-4 border-2 border-black  dark:border-white rounded-full p-2">
          <Link href={"/"} className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"
                clip-rule="evenodd"
              />
            </svg>
            akshyakc095@gmail.com
          </Link>
          <Link href={"/"} className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                clip-rule="evenodd"
              />
            </svg>
            +977-9861724201
          </Link>
        </div>
      </div>
    </div>
  );
}
