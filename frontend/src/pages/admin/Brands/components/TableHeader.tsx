import Searchbar from "../../../../shared/Searchbar";
import PageControl from "../../../../shared/PageControl";
import { useForm } from "../../../../hooks/useForm";
import useBrandStore from "../../../../features/brands/brand.store";
import getPaginationRange from "../../../../utils/getPaginationRange";
import useDebounce from "../../../../hooks/useDebounce";
import { useEffect } from "react";

const TableHeader = () => {
  const { brands, pagination, fetchBrands } = useBrandStore();
  const { page, limit, total_count, setPage } = pagination;

  const { formData, handleChange } = useForm({
    q: "",
  });
  const { q } = formData;

  const debouncedQ = useDebounce(q, 400);

  useEffect(() => {
    const triggerSearch = async () => {
      setPage(1);

      await fetchBrands({ q: debouncedQ });
      console.log(brands);
    };

    triggerSearch();
  }, [debouncedQ]);

  const { from, to } = getPaginationRange(total_count, page, limit);

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
            value={q}
            onChange={handleChange}
          />

          <PageControl />
        </div>
      )}
    </div>
  );
};

export default TableHeader;
