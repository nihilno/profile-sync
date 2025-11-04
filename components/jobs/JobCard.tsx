import DeleteJobButton from "@/components/jobs/DeleteJobButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/lib/types";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import JobInfo from "./JobInfo";

function JobCard({ job }: { job: JobType }) {
  const date = new Date(job.createdAt).toLocaleDateString();

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4 grid grid-cols-2 gap-4">
        <JobInfo icon={<BriefcaseBusiness />} text={job.mode} />
        <JobInfo icon={<MapPin />} text={job.location} />
        <JobInfo icon={<CalendarDays />} text={date} />
        <Badge className="h-8 w-32 cursor-default dark:shadow-[0_1px_8px_var(--color-primary)] dark:hover:shadow-[0_2px_32px_var(--color-primary)]">
          <JobInfo
            icon={<MessageSquare className="h-4 w-4" />}
            text={job.status}
          />
        </Badge>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${job.id}`}>Edit</Link>
        </Button>
        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  );
}

export default JobCard;
