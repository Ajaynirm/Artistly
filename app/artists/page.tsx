"use client";

import { useState } from "react";
import FilterBlock from "@/components/FilterBlock";
import data from "@/data/artists.json";
import { CardDemo } from "@/components/CardDemo";

type cardProps = {
  category?: string;
  location?: string;
  language?: string;
  priceStart?: number;
  priceEnd?: number;
};

export default function ArtistsPage() {
  const [filtered, setFiltered] = useState(data);

  const handleFilterChange = ({
    category,
    location,
    priceStart,
    priceEnd,
  }: cardProps) => {
    let result = data;

    if (category) {
      result = result.filter((a) => a.category === category);
    }
    if (location) {
      result = result.filter((a) => a.location === location);
    }
    if (priceStart) {
      result = result.filter((a) => a.priceStart <= priceStart);
    }
    if (priceEnd) {
      result = result.filter((a) => a.priceEnd >= priceEnd);
    }
    setFiltered(result);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
      <FilterBlock
        categories={["Singer", "Dancer", "DJ", "Speaker"]}
        locations={["Mumbai", "Delhi", "Chennai", "Kolkata"]}
        languages={["Tamil","Kannada","Hindi","Malay","Marathi"]}
        priceStarts={[1000, 5000, 10000, 20000]}
        priceEnds={[50000, 100000, 200000, 500000, 1000000]}
        onFilterChange={handleFilterChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((artist) => (
          <CardDemo key={artist.id} {...artist} />
        ))}
      </div>
      <div></div>
    </div>
  );
}
