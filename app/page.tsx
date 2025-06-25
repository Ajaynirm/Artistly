"use client";

import Link from "next/link";
import Loading from "./loading";


export default function Home() {


  return (
    <main className="p-6">
      {/* Test Header */}
      


      {/* Header */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Artistly</h1>
        <p className="mt-2 text-gray-600">
          Connecting Event Planners with top Artists effortlessly.
        </p>
      </section>

      {/* CTA */}
      <section className="mb-8 text-center">
        {/* <a
          href="/artists"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Explore Artists
        </a> */}
        <Link href={"/artists"}>Explore Artists</Link>
      </section>

      {/* Artist Categories */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Singers", "Dancers", "Speakers", "DJs"].map((cat) => (
            <div
              key={cat}
              className="border p-4 rounded-md text-center hover:bg-gray-50 transition"
            >
              <span className="text-gray-800 font-medium">{cat}</span>
            </div>
          ))}
        </div>
        
      </section>
      
    </main>
  );
}



