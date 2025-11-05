import { Button } from "@/components/ui/button";
import { Briefcase, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="z-10 px-6 text-center">
        <h1 className="text-9xl font-black tracking-tighter md:text-[220px]">
          <span className="from-primary bg-linear-to-r to-emerald-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <p className="drop-shadow-glow mt-6 text-2xl font-bold text-white md:text-4xl">
          This page is long gone.
        </p>
        <p className="mx-auto mt-4 max-w-md text-lg">
          The page you’re looking for has ghosted you. Let’s get you back to
          real jobs.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="xl">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-primary/50"
          >
            <Link href="/jobs" className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Browse Jobs
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
