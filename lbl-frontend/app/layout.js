import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "LBL System - Image Processing",
  description: "Pharmaceutical LBL Processing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow container">{children}</main>
        <footer className="bg-white shadow-inner text-center py-4 text-sm text-gray-500">
          © 2025 LBL System. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
