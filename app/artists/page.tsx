"use client";

import { useEffect, useState } from "react";
import FilterBlock from "@/components/FilterBlock";
import data from "@/data/artists.json";
import { CardDemo } from "@/components/CardDemo";
import { toast } from "sonner";
import { AlertDemo } from "@/components/AlertDemo";

type cardProps = {
  category?: string;
  location?: string;
  language?: string;
  priceStart?: number;
  priceEnd?: number;
};

export default function ArtistsPage() {
  const [filtered, setFiltered] = useState(data);
  const [filters, setFilters] = useState<cardProps>({}); 
  const handleFilterChange = (newFilters: cardProps) => {
    setFilters(newFilters); // trigger useEffect by updating filter state
  };

  useEffect(()=>{
    const getData = ()=>{
        try {
      let result = data;
      if (filters.category) {
        result = result.filter((a) => a.category === filters.category);
      }
      if (filters.location) {
        result = result.filter((a) => a.location === filters.location);
      }
      if(filters.language){
        result = result.filter((a)=> a.language === filters.language);
      }
      if (filters.priceStart !== undefined) {
        result = result.filter((a) => a.priceStart >= filters.priceStart!);
      }
      if (filters.priceEnd !== undefined) {
        result = result.filter((a) => a.priceEnd <= filters.priceEnd!);
      }

      setFiltered(result);
    } catch (error: any) {
      toast(error.message);
    }

    }
    getData();
  },[filters]);
 

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

      {filtered && filtered.length>0 ? 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((artist) => (
              <CardDemo key={artist.id} {...artist} />
            ))}
          </div> :
          <div className="flex justify-center items-center lg:h-150" >
            
            <div>
              <AlertDemo />
            </div>
          </div>
      }
      


      <div></div>
    </div>
  );
}
