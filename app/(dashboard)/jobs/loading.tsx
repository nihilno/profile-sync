import {
  JobListLoadingCard,
  SearchFormLoadingCard,
} from "@/components/ui/Skeletons";

function loading() {
  return (
    <>
      <SearchFormLoadingCard />
      <JobListLoadingCard />
    </>
  );
}

export default loading;
