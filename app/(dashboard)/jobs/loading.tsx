import {
  JobListLoadingCard,
  SearchFormLoadingCard,
} from "@/components/global/Skeletons";

function loading() {
  return (
    <>
      <SearchFormLoadingCard />
      <JobListLoadingCard />
    </>
  );
}

export default loading;
