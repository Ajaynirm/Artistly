'use client';

import { AlertDemo } from "@/components/essentialUi/AlertDemo";

export default function error () {
  return (
    <div className="container mx-auto py-10">
    <div className="flex justify-center items-center lg:h-150">
        <div>
          <AlertDemo name={"Sorry! Application has Some Error"}/>
        </div>
      </div>
  </div>
  )
}

