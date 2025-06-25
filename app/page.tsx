"use client";

import Link from "next/link";
import Image from "next/image";
import Loading from "./loading";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { Fullscreen } from "lucide-react";

export default function Home() {
  const introImage = `https://media.istockphoto.com/id/1478375497/photo/friends-dancing-at-the-festival.jpg
          ?s=612x612&w=0&k=20&c=rVwFBKe__UuQld6kJUWjV48kyw-40OHlnuyQZd4_lgQ=`;
  const singerImage =
    "https://t3.ftcdn.net/jpg/03/26/52/14/360_F_326521465_d3Lv3za5GEGqYAR3M8bem2mHY1vjvmJP.jpg";
  const dancerImage = `https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.
                    1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhbmNlcnxlbnwwfHwwfHx8MA%3D%3D`;
  const DjImage =
    "https://img.freepik.com/free-photo/cyberpunk-dj-illustration_23-2151656004.jpg?w=360";
  const speakerImage =
    "https://images.unsplash.com/photo-1560439514-e960a3ef5019?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <main className="flex flex-col mb-20 sm:p-5 sm:m-5 md:p-6">
      {/* Test Header */}

      <div className="flex  flex-col lg:flex-row p-5 m-3">
        {/* Header */}
        <section className="flex flex-col text-center m-5 p-5 md:m-10">
        <section className="mb-8 text-center lg:p-20  lg:hidden">
  <div className="mx-auto w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[500px]">
    <Image
      src={introImage}
      alt="Intro"
      width={500}
      height={500}
      className="rounded-lg object-cover w-full h-[180px] sm:h-[220px] lg:h-[300px] lg:m-10"
    />
  </div>
</section>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white p-5 md:p-10">
            Welcome to Artistly
          </h1>

          <p className=" m-2 text-white-600">
            Connecting Event Planners with top Artists effortlessly.
          </p>
          <button className="m-5 p-5 border rounded-2xl hover:border-gray-600 border-gray-500 lg:p-5 lg:m-10">
            <Link href={"/artists"}>Explore Artists</Link>
          </button>
        </section>

        {/* CTA */}
        <section className="mb-8 text-center lg:p-20 hidden lg:block">
  <div className="mx-auto w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[500px]">
    <Image
      src={introImage}
      alt="Intro"
      width={500}
      height={500}
      className="rounded-lg object-cover w-full h-[180px] sm:h-[220px] lg:h-[300px] lg:m-10"
    />
  </div>
</section>

      </div>

      {/* Artist Categories */}
      <section>
        <div className="flex flex-col justify-center items-center mb-10 lg:p-5 lg:m-5">
          <h2 className="mb-10 p-5 lg:p-10 text-3xl sm:text-5xl font-semibold text-white-700 ">
            Browse by Category
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
            {["Singers", "Dancers", "Speakers", "DJs"].map((cat) => (
              <div
                key={cat}
                className="border p-4 rounded-md text-center text-sm transition"
              >
                <CategoryCard
                  name={cat}
                  image={
                    cat == "Singers"
                      ? singerImage
                      : cat == "Dancers"
                      ? dancerImage
                      : cat == "Speakers"
                      ? speakerImage
                      : DjImage
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
