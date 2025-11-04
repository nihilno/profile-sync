"use server";

import { auth } from "@clerk/nextjs/server";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import prisma from "./db";
import { createAndEditJobSchema, CreateAndEditJobType } from "./schemas";
import { GetAllJobsActionType, JobType } from "./types";

export async function getUser(): Promise<string> {
  const { userId } = await auth();
  if (!userId) redirect("/");

  return userId;
}

export async function createJobAction(
  values: CreateAndEditJobType,
): Promise<JobType | null> {
  const userId = await getUser();

  try {
    createAndEditJobSchema.parse(values);
    const job: JobType = await prisma.job.create({
      data: { clerkId: userId, ...values },
    });

    return job;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllJobsAction({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobsActionType): Promise<{
  jobs: JobType[];
  count: number;
  page: number;
  totalPages: number;
}> {
  const userId = getUser();

  try {
    let whereClause: any = {
      clerkId: userId,
    };
    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            position: {
              contains: search,
            },
          },
          {
            company: {
              contains: search,
            },
          },
        ],
      };
    }
    if (jobStatus && jobStatus !== "all") {
      whereClause = {
        ...whereClause,
        status: jobStatus,
      };
    }

    const skip = (page - 1) * limit;

    const jobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    const count: number = await prisma.job.count({
      where: whereClause,
    });
    const totalPages = Math.ceil(count / limit);

    return { jobs, count, page, totalPages };
  } catch (error) {
    console.error(error);
    return { jobs: [], count: 0, page: 1, totalPages: 0 };
  }
}

export async function deleteJobAction(id: string): Promise<JobType | null> {
  const userId = await getUser();

  try {
    const job = await prisma.job.delete({
      where: {
        id,
        clerkId: userId,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getJobAction(id: string): Promise<JobType | null> {
  let job: JobType | null = null;
  const userId = await getUser();

  try {
    job = await prisma.job.findUnique({
      where: {
        id,
        clerkId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    job = null;
  }
  if (!job) {
    redirect("/jobs");
  }
  return job;
}

export async function updateJobAction(
  id: string,
  values: CreateAndEditJobType,
): Promise<JobType | null> {
  const userId = await getUser();

  try {
    const job: JobType = await prisma.job.update({
      where: { id, clerkId: userId },
      data: { ...values },
    });

    return job;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getStatsAction(): Promise<{
  pending: number;
  interview: number;
  declined: number;
}> {
  const userId = await getUser();

  try {
    const stats = prisma.job.groupBy({
      where: { clerkId: userId },
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const statsObject = Object.fromEntries(
      (await stats).map((item) => [item.status, item._count.status]),
    );

    const defaultStats = {
      pending: 0,
      declined: 0,
      interview: 0,
      ...statsObject,
    };
    return defaultStats;
  } catch (error) {
    console.error(error);
    redirect("/");
  }
}

export async function getChartsAction(): Promise<
  Array<{ date: string; count: number }>
> {
  const userId = await getUser();
  const sixMonthsAgo = dayjs().subtract(6, "month").toDate();

  try {
    const jobs = await prisma.job.findMany({
      where: {
        clerkId: userId,
        createdAt: {
          gte: sixMonthsAgo,
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    const applicationsPerMonth = jobs.reduce(
      (acc, job) => {
        const date = dayjs(job.createdAt).format("MMM YY");

        const existingEntry = acc.find((entry) => entry.date === date);

        if (existingEntry) {
          existingEntry.count += 1;
        } else {
          acc.push({ date, count: 1 });
        }

        return acc;
      },
      [] as Array<{ date: string; count: number }>,
    );

    return applicationsPerMonth;
  } catch (error) {
    console.error(error);
    redirect("/");
  }
}
