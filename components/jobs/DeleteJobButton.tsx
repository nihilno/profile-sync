import { Button } from "@/components/ui/button";
import { deleteJobAction } from "@/lib/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { toast } from "sonner";

function DeleteJobButton({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast.info("There was an error.");
        return;
      }

      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      toast.success("Job succesfully deleted.");
    },
  });

  return (
    <Button
      size="sm"
      disabled={isPending}
      className="flex items-center gap-2 self-end capitalize"
      onClick={() => {
        mutate(id);
      }}
    >
      <>
        {isPending && <Loader className="animate-spin" />}
        <span>Delete Job</span>
      </>
    </Button>
  );
}

export default DeleteJobButton;
