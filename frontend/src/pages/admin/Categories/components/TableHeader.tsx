import useCategoryStore from "../../../../features/categories/category.store";
import useDebounce from "../../../../hooks/useDebounce";
import { useEffect } from "react";
import getPaginationRange from "../../../../utils/getPaginationRange";
import Searchbar from "../../../../shared/Searchbar";
import PageControl from "../../../../shared/PageControl";

const TableHeader = () => {
  const { total_count, filters, setFilters, fetchCategories } =
    useCategoryStore();
  const { q, page, limit } = filters;

  const handleSearchChange = (e: any) => {
    setFilters({ q: e.target.value });
  };

  const debouncedQ = useDebounce(q, 400);

  useEffect(() => {
    setFilters({ page: 1 });
    fetchCategories({ q: debouncedQ });
  }, [debouncedQ]);

  const { from, to } = getPaginationRange(
    total_count,
    page as number,
    limit as number,
  );

  const handlePageChange = async (newPage: number) => {
    setFilters({ page: newPage });

    await fetchCategories(filters);
  };

  return (
    <div className="border-b border-border p-5 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-surface">
      {/* Title block */}
      <div className="space-y-1">
        <h2 className="text-base font-bold font-headline tracking-wide text-text uppercase">
          Category Directory
        </h2>

        {/* Row Indicator */}
        <p className="text-xs font-medium font-body text-text-muted">
          Showing{" "}
          <span className="font-semibold text-text">
            {from}-{to}
          </span>{" "}
          of <span className="font-semibold text-text">{total_count}</span>{" "}
          entries
        </p>
      </div>

      {/* Control Actions Panel */}
      <div className="flex flex-wrap items-center gap-4">
        <Searchbar
          placeholder="Enter brand ID or name"
          id="q"
          name="q"
          value={q || ""}
          onChange={handleSearchChange}
        />

        <PageControl
          page={page as number}
          limit={limit as number}
          totalCount={total_count}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TableHeader;
