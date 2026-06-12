import Searchbar from "../../../../shared/Searchbar";
import PageControl from "../../../../shared/PageControl";
import useBrandStore from "../../../../features/brands/brand.store";
import getPaginationRange from "../../../../utils/getPaginationRange";
import useDebounce from "../../../../hooks/useDebounce";
import { useEffect } from "react";

const TableHeader = () => {
  const { total_count, filters, setFilters, fetchBrands } = useBrandStore();
  const { q, page, limit } = filters;

  const handleSearchChange = (e: any) => {
    setFilters({ q: e.target.value });
  };

  const debouncedQ = useDebounce(q, 400);

  useEffect(() => {
    const triggerSearch = async () => {
      setFilters({ page: 1 });

      await fetchBrands({ q: debouncedQ });
    };

    triggerSearch();
  }, [debouncedQ]);

  const { from, to } = getPaginationRange(
    total_count,
    page as number,
    limit as number,
  );

  return (
    <div className="border-b border-border p-5 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-surface">
      {/* Title block */}
      <div className="space-y-1">
        <h2 className="text-base font-bold font-headline tracking-wide text-text uppercase">
          Brand Directory
        </h2>

        {/* Row Indicator */}
        {total_count > 0 && (
          <p className="text-xs font-medium font-body text-text-muted">
            Showing{" "}
            <span className="font-semibold text-text">
              {from}-{to}
            </span>{" "}
            of <span className="font-semibold text-text">{total_count}</span>{" "}
            entries
          </p>
        )}
      </div>

      {/* Control Actions Panel */}
      {/* TODO change condition */}
      {true && (
        <div className="flex flex-wrap items-center gap-4">
          <Searchbar
            placeholder="Enter brand ID or name"
            id={"q"}
            name={"q"}
            value={q ?? ""}
            onChange={handleSearchChange}
          />

          <PageControl />
        </div>
      )}
    </div>
  );
};

export default TableHeader;
