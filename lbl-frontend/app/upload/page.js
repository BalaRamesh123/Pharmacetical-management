"use client";
import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const [uploaded, setUploaded] = useState(false);

  const handleUploadSuccess = () => {
    setUploaded(true);
    setTimeout(() => router.push("/preview"), 1500);
  };

  return (
    <div className="card mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">
        Upload LBL Files
      </h2>
      <p className="text-gray-600 mb-6">
        Supported formats: <b>PDF, PNG, JPEG</b> (max 10 files)
      </p>
      <FileUploader onSuccess={handleUploadSuccess} />
      {uploaded && (
        <p className="text-green-600 mt-4 font-medium">
          ✅ Upload successful! Redirecting to preview...
        </p>
      )}
    </div>
  );
}
