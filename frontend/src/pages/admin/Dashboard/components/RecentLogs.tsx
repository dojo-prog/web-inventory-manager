import { useMemo } from "react";
import useDashboardStore from "../../../../features/dashboard/dashboard.store";
import RecentLogsLoader from "./RecentLogsLoader";
import RecentLogsEmpty from "./RecentLogsEmpty";

const getActionColor = (action: string) => {
  if (action === "CREATE") return "text-primary";
  if (action === "DELETE") return "text-red-500";
  return "text-text-muted";
};

const RecentLogs = () => {
  const { recentActivityLogs, fetchingRecentLogs } = useDashboardStore();

  const renderedLogs = useMemo(() => {
    if (!recentActivityLogs) return [];

    return recentActivityLogs.map((log) => ({
      ...log,
      time: new Date(log.created_at).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }));
  }, [recentActivityLogs]);

  return (
    <div className="h-full flex flex-col bg-surface border border-border rounded-xl shadow-sm">
      {/* Header Panel */}
      <div className="p-5 shrink-0 border-b border-border/50">
        <h2 className="text-lg font-semibold font-headline text-text">
          Recent Activity Logs
        </h2>
      </div>

      {/* Main Content Processing Hub */}
      {fetchingRecentLogs ? (
        <RecentLogsLoader />
      ) : renderedLogs.length === 0 ? (
        <RecentLogsEmpty />
      ) : (
        <div className="flex-1 overflow-y-auto px-5 divide-y divide-border/40">
          {renderedLogs.map((log) => (
            <div
              key={log.id}
              className="py-3.5 flex items-start justify-between gap-4 font-body text-sm first:pt-4 last:pb-4"
            >
              {/* Left Side: Context Details */}
              <div className="space-y-1">
                <p className="text-text font-medium">
                  <span className="font-semibold">{`${log.user_fname} ${log.user_lname}`}</span>
                  <span className="text-text-muted"> performed </span>
                  <span
                    className={`font-mono font-semibold text-xs bg-background px-1.5 py-0.5 rounded ${getActionColor(log.action)}`}
                  >
                    {log.action}
                  </span>
                </p>

                {/* Target Scope Sub-labels */}
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <span className="capitalize">{log.entity_type}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="font-label">ID: {log.entity_id}</span>
                </div>
              </div>

              {/* Right Side: Timestamp */}
              <div className="text-right whitespace-nowrap mt-0.5">
                <span className="text-xs font-medium text-secondary tabular-nums">
                  {log.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Controls */}
      <div className="shrink-0 border-t border-border p-4">
        <button
          disabled={fetchingRecentLogs || renderedLogs.length === 0}
          className="w-full text-sm font-medium text-primary hover:text-primary-hover disabled:text-text-muted/50 disabled:cursor-not-allowed transition-colors"
        >
          View Full History →
        </button>
      </div>
    </div>
  );
};

export default RecentLogs;
