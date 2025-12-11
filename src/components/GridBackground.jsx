import React from "react";

export default function GridBackground() {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-0.5">
        {Array.from({ length: 400 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-700"
          ></div>
        ))}
      </div>
    </div>
  );
}