"use client";
import LBLVariationGenerator from "@/components/LBLVariationGenerator";

export default function GeneratePage() {
  return (
    <div className="card mt-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Generated LBL Variations
      </h2>
      <p className="text-gray-600 mb-6">
        Choose from 5 auto-generated LBL layouts below.
      </p>
      <LBLVariationGenerator />
    </div>
  );
}
