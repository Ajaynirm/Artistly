"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const artistMock = {
  id: 1,
  name: "John Doe",
  category: "Singer",
  location: "Mumbai",
  language: "Hindi",
  feeRangeStart: 10000,
  feeRangeEnd: 50000,
  bio: "A versatile singer with over 10 years of stage experience.",
  image: "/artist-placeholder.jpg",
};

export default function ArtistDetailPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email || !phone) return alert("Please enter both email and phone");
    setIsSubmitted(true);
    // Call your API here to send quote request
    console.log({ email, phone, artistId: artistMock.id });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Artist Info */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <img
          src={artistMock.image}
          alt={artistMock.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold">{artistMock.name}</h2>
        <p className="text-sm text-gray-500 mb-1">{artistMock.category} • {artistMock.location}</p>
        <p className="text-sm text-gray-500 mb-2">Language: {artistMock.language}</p>
        <p className="text-gray-700">{artistMock.bio}</p>
        <p className="mt-4 text-lg font-medium text-green-600">
          ₹{artistMock.feeRangeStart} - ₹{artistMock.feeRangeEnd}
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Request a Quote</h3>

        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded text-sm"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            className="w-full border px-3 py-2 rounded text-sm"
            placeholder="+91-XXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={isSubmitted}
        >
          {isSubmitted ? "Request Sent" : "Ask for a Quote"}
        </Button>

        {isSubmitted && (
          <p className="text-green-600 text-sm mt-2">
            Thank you! The artist manager will contact you soon.
          </p>
        )}
      </div>
    </div>
  );
}
