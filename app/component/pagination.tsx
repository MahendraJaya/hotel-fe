"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 items-center justify-center mt-6">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="px-3 py-1 border rounded cursor-pointer hover:bg-black hover:text-white disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 cursor-pointer py-1 hover:bg-black hover:text-white border rounded ${
            page === currentPage ? "bg-black text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="px-3 py-1 border cursor-pointer hover:bg-black hover:text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
