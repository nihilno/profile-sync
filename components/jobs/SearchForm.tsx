"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobStatus } from "@/lib/types";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;

    const params = new URLSearchParams();
    params.set("search", search);
    params.set("jobStatus", jobStatus);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      className="bg-muted/85 grid gap-6 rounded-lg p-8 sm:grid-cols-2 md:grid-cols-3"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search Jobs"
          name="search"
          defaultValue={search}
          className="pl-10"
        />
        <Search
          className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
          strokeWidth={2}
        />
      </div>

      <Select name="jobStatus" defaultValue={jobStatus}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          {["all", ...Object.values(JobStatus)].map((jobStatus) => (
            <SelectItem key={jobStatus} value={jobStatus}>
              {jobStatus}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit" className="w-1/2 place-self-end">
        Search
      </Button>
    </form>
  );
}

export default SearchForm;
