import Hero from "./components/Hero";
import RecentProject2 from "./components/RecentProject2";
import LatestBlogs from "./components/LatestBlogs";
import TestimonialBox from "./components/TestimonialBox";
export default function IndexPage() {
  return (
    <div className="w-full py-10 md:px-20">
      <Hero />
      <RecentProject2 />
      <TestimonialBox />
      <LatestBlogs />
    </div>
  );
}
