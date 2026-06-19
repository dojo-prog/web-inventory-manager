import PageControl from "../../../../shared/PageControl";
import Searchbar from "../../../../shared/Searchbar";

const TableHeader = () => {
  return (
    <div className="border-b border-border p-5 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-surface">
      {/* Title block */}
      <div className="space-y-1">
        <h2 className="text-base font-bold font-headline tracking-wide text-text uppercase">
          Product Directory
        </h2>

        {/* Row Indicator */}
        <p className="text-xs font-medium font-body text-text-muted">
          Showing <span className="font-semibold text-text">1-10</span> of{" "}
          <span className="font-semibold text-text">25</span> entries
        </p>
      </div>

      {/* Control Actions Panel */}
      <div className="flex flex-wrap items-center gap-4">
        <Searchbar
          placeholder="Enter ID, name, contact name, email or website "
          id="q"
          name="q"
          value=""
          onChange={() => {}}
        />

        <PageControl
          page={1}
          limit={10}
          totalCount={25}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default TableHeader;
