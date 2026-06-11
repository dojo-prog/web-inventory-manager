const RecentLogsLoader = () => {
  return (
    <div className="flex-1 space-y-0.5 overflow-hidden px-5">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse py-3.5 flex items-start justify-between gap-4 border-b border-border/40 last:border-0"
        >
          {/* Left Side: Text Line Layout Skeletons */}
          <div className="space-y-2 flex-1">
            {/* User description line skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-24 rounded bg-gray-200/80" />
              <div className="h-4 w-16 rounded bg-gray-200/40" />
              <div className="h-5 w-20 rounded bg-gray-200/60" />
            </div>

            {/* Target Scope metadata tokens */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-12 rounded bg-gray-200/50" />
              <div className="h-1 w-1 rounded-full bg-gray-200" />
              <div className="h-3 w-16 rounded bg-gray-200/50" />
            </div>
          </div>

          {/* Right Side: Timestamp Node */}
          <div className="h-3 w-10 rounded bg-gray-200/60 mt-1 shrink-0" />
        </div>
      ))}
    </div>
  );
};

export default RecentLogsLoader;
