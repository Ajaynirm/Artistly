'use client';

interface ArtistCardProps {
    name: string;
    category: string;
    priceRange: string;
    location: string;
    onClick?: () => void; // Optional: e.g. "Ask for Quote" or any action
  }
  
  export default function ArtistCard({
    name,
    category,
    priceRange,
    location,
    onClick,
  }: ArtistCardProps) {
    return (
      <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition bg-white">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-sm text-gray-600">Location: {location}</p>
        <p className="text-sm text-gray-600">Price: {priceRange}</p>
  
        {onClick && (
          <button
            onClick={onClick}
            className="mt-3 bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700 transition"
          >
            Ask for Quote
          </button>
        )}
      </div>
    );
  }
  