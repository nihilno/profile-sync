import { Card } from "./card";
import { Skeleton } from "./skeleton";

export function SearchFormLoadingCard() {
  return (
    <Card className="h-[104px] w-full">
      <div className="grid items-center gap-6 px-8 py-2 sm:grid-cols-2 md:grid-cols-3">
        <Skeleton className="h-[34px]" />
        <Skeleton className="h-[34px]" />
        <Skeleton className="h-[34px]" />
      </div>
    </Card>
  );
}

export function JobListLoadingCard({ count = 4 }: { count?: number }) {
  return (
    <>
      <div className="my-[104px]"></div>
      <div className="grid gap-8 md:grid-cols-2">
        {Array.from({ length: count }, (_, index) => (
          <Card key={index} className="h-[285px] w-full -translate-y-1">
            <div className="grid h-full grid-rows-3 items-center px-6">
              <Skeleton className="h-[34px] w-1/3" />
              <Skeleton className="h-[34px]" />
              <Skeleton className="h-[34px]" />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
export function StatsLoadingCard() {
  return (
    <Card className="grid h-[88px] w-full items-center px-6">
      <div className="flex -translate-y-0.5 items-center justify-between">
        <Skeleton className="h-8 w-[180px]" />
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
    </Card>
  );
}
