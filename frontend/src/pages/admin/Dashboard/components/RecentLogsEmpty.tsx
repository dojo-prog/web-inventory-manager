import { HistoryIcon } from "lucide-react";

const RecentLogsEmpty = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center my-auto">
      {/* Decorative Icon Wrapper */}
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 border border-border text-primary mb-3.5 shadow-sm">
        <HistoryIcon className="h-5 w-5" />
      </div>

      <h3 className="text-md font-headline font-semibold text-text">
        No log activities recorded
      </h3>
      <p className="mt-1 text-xs font-label text-secondary max-w-60">
        Stock adjustments, and record mutations will appear here.
      </p>
    </div>
  );
};

export default RecentLogsEmpty;
