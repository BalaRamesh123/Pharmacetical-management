"use client";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to the LBL Processing System
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Upload and analyze your pharmaceutical label (LBL) designs.
        Our system parses components, categorizes marketing elements,
        and generates new layout variations.
      </p>
      <Link href="/upload">
        <button className="btn-primary">Start Upload</button>
      </Link>
    </section>
  );
}
