"use client";

import Spinner from "@/components/global/Spinner";
import { getAllJobsAction } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import JobCard from "./JobCard";
import Pagination from "./Pagination";

function JobsList() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";

  const pageNumber = Number(searchParams.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];
  const count = data?.count || 0;
  const page = data?.page || 1;
  const totalPages = data?.totalPages || 0;

  if (isPending)
    return (
      <div className="absolute left-1/2 min-h-dvh -translate-x-1/2 translate-y-1/4">
        <Spinner />
      </div>
    );
  if (jobs.length < 1) return <h2 className="text-xl">No Jobs found.</h2>;

  return (
    <>
      <div className="my-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold capitalize">
          {count} jobs found
        </h2>
        {totalPages < 2 ? null : (
          <Pagination currentPage={page} totalPages={totalPages} />
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <div className="relative mt-10 flex w-full items-center">
        <span className="absolute">
          {page} / {totalPages}
        </span>
        <div className="ml-auto">
          {totalPages < 2 ? null : (
            <Pagination currentPage={page} totalPages={totalPages} />
          )}
        </div>
      </div>
    </>
  );
}

export default JobsList;
