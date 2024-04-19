import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header/>
      <section className="p-6 pt-32 max-w-4xl mx-auto"> 
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link<br/> for everything
          </h1>
          <br/>
          <h2 className="text-gray-500 text-xl">
            Share your links, social profiles and other on one page
          </h2>
        </div>
        <form className="inline-flex items-center shadow-lg shadow-black/20">
          <span className="bg-white py-4 pl-4 ">linklist.to/</span>
          <input type="text" className="py-4" placeholder="username"/>
          <button type="submit" className="bg-blue-500 text-white px-6 py-4">Join for free</button>
        </form>
      </section>
    </main>
  );
}
