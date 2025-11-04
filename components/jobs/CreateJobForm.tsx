"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createJobAction } from "@/lib/actions";
import { createAndEditJobSchema, CreateAndEditJobType } from "@/lib/schemas";
import { JobMode, JobStatus } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CustomFormField, CustomFormSelect } from "./FormComponents";

function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
    mode: "onBlur",
  });

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast.warning("There was an error.");
        return;
      }
      toast.success("Job created.");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
      router.push("/jobs");
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted mx-auto w-2/3 rounded-lg px-12 pt-12 pb-24"
      >
        <h2 className="mb-12 text-4xl font-semibold capitalize">Add job</h2>
        <div className="grid items-start gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          <CustomFormField name="position" control={form.control} />
          <CustomFormField name="company" control={form.control} />
          <CustomFormField name="location" control={form.control} />

          <CustomFormSelect
            name="status"
            control={form.control}
            label="job status"
            items={Object.values(JobStatus)}
          />

          <CustomFormSelect
            name="mode"
            control={form.control}
            label="job mode"
            items={Object.values(JobMode)}
          />

          <Button
            type="submit"
            disabled={isPending}
            className="flex items-center gap-2 self-end capitalize"
          >
            <>
              {isPending && <Loader className="animate-spin" />}
              <span>Create Job</span>
            </>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateJobForm;
