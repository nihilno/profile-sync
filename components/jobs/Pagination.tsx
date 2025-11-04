"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePageChange(page: number) {
    const defaultParams = {
      search: searchParams.get("search") || "",
      jobStatus: searchParams.get("jobStatus") || "",
      page: String(page),
    };

    const params = new URLSearchParams(defaultParams);
    router.push(`${pathname}?${params.toString()}`);
  }

  function addPageButton({
    page,
    isActive,
  }: {
    page: number;
    isActive: boolean;
  }) {
    return (
      <Button
        key={page}
        size="icon"
        variant={isActive ? "default" : "outline"}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    );
  }

  function renderPageButton() {
    const pageButtons = [];

    //first page
    pageButtons.push(addPageButton({ page: 1, isActive: currentPage === 1 }));

    //dots
    if (currentPage > 3)
      pageButtons.push(
        <Button key="dots-1" size="icon" variant="outline">
          ...
        </Button>,
      );

    if (currentPage !== 1 && currentPage !== 2)
      pageButtons.push(
        addPageButton({ page: currentPage - 1, isActive: false }),
      );

    //current page
    if (currentPage !== 1 && currentPage !== totalPages)
      pageButtons.push(addPageButton({ page: currentPage, isActive: true }));

    if (currentPage !== totalPages && currentPage !== totalPages - 1)
      pageButtons.push(
        addPageButton({ page: currentPage + 1, isActive: false }),
      );

    if (currentPage < totalPages - 2)
      pageButtons.push(
        <Button key="dots-2" size="icon" variant="outline">
          ...
        </Button>,
      );

    //last page
    pageButtons.push(
      addPageButton({
        page: totalPages,
        isActive: currentPage === totalPages,
      }),
    );

    return pageButtons;
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        className="flex items-center gap-2"
        variant="outline"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = totalPages;
          handlePageChange(prevPage);
        }}
      >
        <ChevronLeft />
        prev
      </Button>
      {renderPageButton()}
      <Button
        className="flex items-center gap-2"
        variant="outline"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > totalPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;
