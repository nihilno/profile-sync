import z from "zod";
import { JobMode, JobStatus } from "./types";

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  status: z.enum(JobStatus),
  mode: z.enum(JobMode),
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;
