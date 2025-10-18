"use client";
import { useState } from "react";

export default function CategorySelector() {
  const [categories, setCategories] = useState([
    { name: "Brand Logo", type: "Logo" },
    { name: "Tagline", type: "Text" },
    { name: "Molecule Image", type: "Image" },
  ]);

  return (
    <div className="grid gap-4">
      {categories.map((item, idx) => (
        <div key={idx} className="border p-4 rounded-lg bg-gray-50 flex justify-between items-center">
          <span className="font-medium text-gray-800">{item.name}</span>
          <select
            className="border rounded-md px-3 py-1 text-sm text-gray-700"
            value={item.type}
            onChange={(e) => {
              const updated = [...categories];
              updated[idx].type = e.target.value;
              setCategories(updated);
            }}
          >
            <option>Logo</option>
            <option>Text</option>
            <option>Image</option>
            <option>Tagline</option>
          </select>
        </div>
      ))}
    </div>
  );
}
