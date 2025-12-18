import ProjectSection from "./components/ProjectSection";
import PostsSection from "./components/PostsSections";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-10 sm:p-20 font-sans">
      <div className="relative">
        <div className="opacity-10">
          <div className="absolute top-0 right-0 sm:w-150 sm:h-150 w-75 h-75 bg-(--primary)/50 rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 sm:w-100 sm:h-100 w-37.5 h-37.5 bg-purple-500/60 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-8 sm:w-75 sm:h-75 w-25 h-25 bg-purple-400/70 rounded-full blur-xl"></div>
        </div>
        <h1 className="text-4xl font-bold tracking-light">
          Software Engineer and <span className="block text-(--primary)">UI/UX Designer </span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 leading-8">
          Full stack developer
        </p>
        <div className="flex mt-10 gap-4">
          <Link href={`/posts/3`} 
          className="px-8 py-3 rounded-lg bg-(--primary) text-white font-medium hover:bg-purple-400">
            About Me
          </Link>
          <button className="px-8 py-3 rounded-lg border border-gray-600 font-medium hover:bg-purple-400">
            Contact Me
          </button>
        </div>
      </div>
      <ProjectSection />
      <PostsSection />
    </div>
  );
}
