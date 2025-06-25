'use client';

import { SkeletonCard } from "@/components/skeleton/SkeletonCard";

export default function Loading () {
  return (
    <div className="flex flex-col justify-center items-center h-150">
        
        <SkeletonCard />
        <div className="text-gray-400 p-10">Loading ...</div>
    </div>
    

  )
}
