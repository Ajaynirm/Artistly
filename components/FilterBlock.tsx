'use client';

import { useEffect, useState } from "react";
import {
  Card
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

interface FilterBlockProps {
  categories?: string[];
  locations?: string[];
  languages?: string[];
  priceStarts?: number[];
  priceEnds?: number[];
  

  onFilterChange: (filters: {
    category?: string;
    location?: string;
    language?: string;
    priceStart?: number;
    priceEnd?: number;
  }) => void;
}


export default function FilterBlock({categories = [],locations = [],languages= [],priceStarts = [],priceEnds = [],onFilterChange }: FilterBlockProps) {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('');
  const [priceStart, setPriceStart] = useState<number | undefined>();
  const [priceEnd, setPriceEnd] = useState<number | undefined>();
  const [resetting, setResetting] = useState(false);

  useEffect(()=>{
    if (resetting) {
      onFilterChange({
        category: '',
        location: '',
        language: '',
        priceStart: undefined,
        priceEnd: undefined,
      });
      setResetting(false);
    }
  },[category, location, language, priceStart, priceEnd,resetting])

  const handleFilter = () => {
    // console.log(category,location,language,priceStart,priceEnd);
    onFilterChange({ category, location, language, priceStart, priceEnd });
  };
  const handleReset = () =>{
    setCategory('');setLocation('');
    setLanguage('');setPriceStart(undefined);setPriceEnd(undefined);
    setResetting(true);
    handleFilter();
  }

  return (
    <Card className="w-full max-w-sm p-2 flex flex-col ">



<div className="flex flex-row justify-around md:block">


      {/* Category Dropdown */}
      {categories.length > 0 && (
  <div className="pb-2">
    <Label className="block mb-1 text-sm font-medium">Category</Label>
    <Select
      value={category !== undefined ? String(category) : "All"}
      onValueChange={(value) => setCategory(value)}
    >
      <SelectTrigger className="w-full border rounded px-3 py-2 text-sm">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          {categories.map((c, ind) => (
            <SelectItem key={ind} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
)}


      {/* Location Dropdown */}
      {locations.length > 0 && (
  <div className="pb-2">
    <Label className="block mb-1 text-sm font-medium">Location</Label>
    <Select
      value={location !== undefined ? String(location) : "All"}
      onValueChange={(value) => setLocation(value)}
    >
      <SelectTrigger className="w-full border rounded px-3 py-2 text-sm">
        <SelectValue placeholder="Select Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Locations</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          {locations.map((loc, ind) => (
            <SelectItem key={ind} value={loc}>
              {loc}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
)}

</div>


<div className="flex flex-row justify-around md:block">
       {/* Language Dropdown */}
       {languages.length > 0 && (
  <div className="pb-2">
    <Label className="block mb-1 text-sm font-medium">Language</Label>
    <Select
      value={language !== undefined ? String(language) : "All"}
      
      onValueChange={(value) => setLanguage(value)}
    >
      <SelectTrigger className="w-full border rounded px-3 py-2 text-sm">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          {languages.map((lang, ind) => (
            <SelectItem key={ind} value={lang}>
              {lang}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
)}




      {/* Price Start Dropdown */}
      {priceStarts.length > 0 && (
  <div className="pb-2">
    <Label className="block mb-1 text-sm font-medium">Price Start</Label>
    <Select
      value={priceStart !== undefined ? String(priceStart) : "All"}
      onValueChange={(value) =>
        setPriceStart(value ? parseInt(value) : undefined)
      }
    >
      <SelectTrigger className="w-full border rounded px-3 py-2 text-sm">
        <SelectValue placeholder="Select Price Start" />
        
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Start From</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          {priceStarts.map((range, ind) => (
            <SelectItem key={ind} value={String(range)}>
              ₹{range}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
)}


      {/* Price End Dropdown */}
      {priceEnds.length > 0 && (
  <div className="pb-2">
    <Label className="block mb-1 text-sm font-medium">Price End</Label>
    <Select
      value={priceEnd !== undefined ? String(priceEnd) : "All"}
      onValueChange={(value) =>
        setPriceEnd(value ? parseInt(value) : undefined)
      }
    >
      <SelectTrigger className="w-full border rounded px-3 py-2 text-sm">
        <SelectValue placeholder="Select Price End" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>End At</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          {priceEnds.map((range, ind) => (
            <SelectItem key={ind} value={String(range)}>
              ₹{range}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
)}

</div>
      <button
        onClick={handleFilter}
        className="w-full bg-blue-600 text-white py-2 text-sm rounded hover:bg-blue-700 transition"
      >
        Apply Filters
      </button>
      <button
        onClick={handleReset}
        className="w-full bg-red-600 text-white py-2 text-sm rounded hover:bg-red-700 transition"
      >
        Remove Filters
      </button>
    </Card>
  );
}


