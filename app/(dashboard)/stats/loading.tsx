import { StatsLoadingCard } from "@/components/ui/Skeletons";

function loading() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatsLoadingCard />
      <StatsLoadingCard />
      <StatsLoadingCard />
    </div>
  );
}

export default loading;
