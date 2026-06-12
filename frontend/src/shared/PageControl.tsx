import { ChevronLeft, ChevronRight } from "lucide-react";
import useBrandStore from "../features/brands/brand.store";

const PageControl = () => {
  const { pagination, fetchBrands, fetchingBrands } = useBrandStore();
  const { page, limit, total_count } = pagination;

  const totalPages = Math.max(1, Math.ceil(total_count / limit));

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
        >
          <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
        </button>

        <button
          aria-label="Next Page"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors hover:bg-neutral-hover hover:text-primary hover:border-primary/20 active:scale-95 cursor-pointer shadow-xs"
        >
          <ChevronRight className="h-4 w-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};

export default PageControl;
