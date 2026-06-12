import { ChevronLeft, ChevronRight } from "lucide-react";
import useBrandStore from "../features/brands/brand.store";

const PageControl = () => {
  const { filters, setFilters, fetchBrands, total_count } = useBrandStore();
  const { page, limit } = filters;

  const totalPages = Math.max(1, Math.ceil(total_count / limit!));

  const handlePagination = async (page: number) => {
    setFilters({ page });
    await fetchBrands(filters);
  };

  return (
    <div className="flex items-center gap-3 border-l border-border pl-4 h-9 font-body">
      {/* Page Index Label */}
      <span className="text-xs font-medium text-text-muted select-none mr-1">
        Page <span className="font-label text-text font-semibold">{page}</span>{" "}
        of{" "}
        <span className="font-label text-text font-semibold">{totalPages}</span>
      </span>

      <div className="flex items-center gap-1.5">
        <button
          disabled={page === 1}
          aria-label="Previous Page"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors disabled:pointer-events-none disabled:opacity-35 disabled:bg-tertiary"
          onClick={() => handlePagination(page! - 1)}
        >
          <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
        </button>

        <button
          disabled={page === totalPages}
          aria-label="Next Page"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors hover:bg-neutral-hover hover:text-primary hover:border-primary/20 active:scale-95 cursor-pointer shadow-xs"
          onClick={() => handlePagination(page! + 1)}
        >
          <ChevronRight className="h-4 w-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

export default PageControl;
