"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

type props = {
  name: string;
  image: string;
};

export function CategoryCard({ name, image }: props) {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardContent>
        <Link href={"/artists"}>
          <Image
            src={image}
            alt="Artist"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </Link>
      </CardContent>
      <CardFooter className="sm:text-sm md:text-3xl text-center">
        {name}
      </CardFooter>
    </Card>
  );
}


