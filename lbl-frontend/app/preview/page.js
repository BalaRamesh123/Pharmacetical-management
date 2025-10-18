"use client";
import ImagePreview from "@/components/ImagePreview";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <div className="card mt-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Preview Extracted Components
      </h2>
      <ImagePreview />
      <div className="text-right mt-6">
        <Link href="/categorize">
          <button className="btn-primary">Next: Categorize Components →</button>
        </Link>
      </div>
    </div>
  );
}
