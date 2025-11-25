"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <AlertCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-white">Something went wrong</h1>
        <p className="text-gray-400 mb-8">
          Don't worry, it's not your fault. Something unexpected happened on our end.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg font-semibold border border-gray-700 hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

