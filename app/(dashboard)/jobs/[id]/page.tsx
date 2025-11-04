import EditJobForm from "@/components/jobs/EditJobForm";
import { getJobAction } from "@/lib/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function JobPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["job", id],
    queryFn: () => getJobAction(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm id={id} />
    </HydrationBoundary>
  );
}
