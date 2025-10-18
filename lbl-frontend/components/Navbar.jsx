"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-blue-700 font-bold text-xl">
          LBL System
        </Link>
        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/upload">Upload</Link>
          <Link href="/preview">Preview</Link>
          <Link href="/categorize">Categorize</Link>
          <Link href="/generate">Generate</Link>
        </div>
      </div>
    </nav>
  );
}
