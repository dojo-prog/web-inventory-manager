import Searchbar from "../../../../shared/Searchbar";
import PageControl from "../../../../shared/PageControl";
import { useForm } from "../../../../hooks/useForm";

const TableHeader = () => {
  const { formData, handleChange } = useForm({
    q: "",
  });
  const { q } = formData;

  return (
    <div className="border-b border-border p-5 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-surface">
      {/* Title block */}
      <div className="space-y-1">
        <h2 className="text-base font-bold font-headline tracking-wide text-text uppercase">
          Brand Directory
        </h2>

        {/* Row Indicator */}
        <p className="text-xs font-medium font-body text-text-muted">
          Showing <span className="font-semibold text-text">1-20</span> of{" "}
          <span className="font-semibold text-text">200</span> entries
        </p>
      </div>

      {/* Control Actions Panel */}
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
    </div>
  );
};

export default TableHeader;
