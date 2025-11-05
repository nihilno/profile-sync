// app/error.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="px-6 text-center">
        <h1 className="text-8xl font-black tracking-tighter md:text-9xl">
          <span className="text-primary/75">OOPS</span>
        </h1>

        <p className="mt-6 text-2xl font-bold text-white md:text-3xl">
          Something went wrong
        </p>
        <p className="mx-auto mt-3 max-w-lg opacity-75">
          {error.message ||
            "The app hiccuped. Don’t worry — your jobs are safe."}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={reset} size="xl">
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>

          <Button asChild variant="outline" size="xl">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Home
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-xs opacity-75">
          Error ID: {error.digest || "local"}
        </p>
      </div>
    </main>
  );
}
