"use client";
import CategorySelector from "@/components/CategorySelector";
import Link from "next/link";

export default function CategorizePage() {
  return (
    <div className="card mt-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Categorize Components
      </h2>
      <p className="text-gray-600 mb-6">
        Review and confirm the classification of each component (brand name,
        molecule image, tagline, etc.).
      </p>
      <CategorySelector />
      <div className="text-right mt-6">
        <Link href="/generate">
          <button className="btn-primary">Generate New LBL Variations →</button>
        </Link>
      </div>
    </div>
  );
}
