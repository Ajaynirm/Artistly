'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface FilterBlockProps {
  categories?: string[];
  locations?: string[];
  priceStarts?: number[];
  priceEnds?: number[];

  onFilterChange: (filters: {
    category?: string;
    location?: string;
    priceStart?: number;
    priceEnd?: number;
  }) => void;
}

type cardProps={
  category:string;
  location:string;
  priceStart: number;
  priceEnd: number;
}

export default function FilterBlock({
  categories = [],
  locations = [],
  priceStarts = [],
  priceEnds = [],
  onFilterChange,
}: FilterBlockProps) {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [priceStart, setPriceStart] = useState<number | undefined>();
  const [priceEnd, setPriceEnd] = useState<number | undefined>();

  const handleFilter = () => {
    onFilterChange({ category, location, priceStart, priceEnd });
  };

  return (
    <Card className="w-full max-w-sm p-2 ">

      {/* Category Dropdown */}
      {categories.length > 0 && (
        <div>
          <label className="block mb-1 text-sm font-medium">Category</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((c,ind) => (
              <option key={ind} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Location Dropdown */}
      {locations.length > 0 && (
        <div>
          <label className="block mb-1 text-sm font-medium">Location</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All</option>
            {locations.map((loc,ind) => (
              <option key={ind} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Price Start Dropdown */}
      {priceStarts.length > 0 && (
        <div>
          <label className="block mb-1 text-sm font-medium">Price Start</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm"
            value={priceStart ?? ''}
            onChange={(e) =>
              setPriceStart(e.target.value ? parseInt(e.target.value) : undefined)
            }
          >
            <option value="">All</option>
            {priceStarts.map((range: number,ind: number) => (
              <option key={ind} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Price End Dropdown */}
      {priceEnds.length > 0 && (
        <div>
          <label className="block mb-1 text-sm font-medium">Price End</label>
          <select
            className="w-full border rounded px-3 py-2 text-sm"
            value={priceEnd ?? ''}
            onChange={(e) =>
              setPriceEnd(e.target.value ? parseInt(e.target.value) : undefined)
            }
          >
            <option value="">All</option>
            {priceEnds.map((range: number,ind:number) => (
              <option key={ind} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={handleFilter}
        className="w-full bg-blue-600 text-white py-2 text-sm rounded hover:bg-blue-700 transition"
      >
        Apply Filters
      </button>
    </Card>
  );
}


