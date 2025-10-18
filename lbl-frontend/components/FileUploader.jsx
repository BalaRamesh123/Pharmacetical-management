"use client";
import { useState } from "react";
import api from "@/app/api";

export default function FileUploader({ onSuccess }) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    if (files.length === 0) return alert("Please select files first.");
    setUploading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onSuccess();
    } catch (err) {
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        multiple
        accept=".pdf,.png,.jpg,.jpeg"
        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        onChange={handleFileChange}
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`btn-primary ${uploading ? "opacity-60" : ""}`}
      >
        {uploading ? "Uploading..." : "Upload Files"}
      </button>
    </div>
  );
}
