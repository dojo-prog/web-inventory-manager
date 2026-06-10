const mockActivityLogs = [
  {
    id: "a3fa1e90-c262-4217-916c-dfc5da558ba2",
    user_name: "Admin John",
    action: "STOCK_ADJUST",
    entity_type: "products",
    entity_id: "7781",
    created_at: "2026-06-11T11:30:00Z",
  },
  {
    id: "b4bb2f81-d151-4116-825b-cfc5da559ca3",
    user_name: "Sarah Jenkins",
    action: "CREATE",
    entity_type: "supplier",
    entity_id: "4412",
    created_at: "2026-06-11T10:15:00Z",
  },
  {
    id: "c5cc3a72-e040-4005-714a-cfc5da550da4",
    user_name: "System Auto-Process",
    action: "LOGIN_SUCCESS",
    entity_type: "users",
    entity_id: "9021",
    created_at: "2026-06-11T09:00:00Z",
  },
  {
    id: "d6dd4b63-f939-3994-603a-cfc5da551eb5",
    user_name: "Admin John",
    action: "DELETE",
    entity_type: "brands",
    entity_id: "3110",
    created_at: "2026-06-10T16:45:00Z",
  },
];

// Simple helper to assign text colors based on actions using standard styling or primary accents
const getActionColor = (action: string) => {
  if (action === "CREATE") return "text-primary";
  if (action === "DELETE") return "text-red-500";
  return "text-text-muted";
};

const RecentLogs = () => {
  return (
    <div className="h-full flex flex-col bg-surface border border-border rounded-xl shadow-sm">
      {/* Header Panel */}
      <div className="p-5 shrink-0">
        <h2 className="text-lg font-semibold font-headline text-text">
          Recent Activity Logs
        </h2>
      </div>

      {/* Simple List Wrapper */}
      <div className="flex-1 overflow-y-auto px-5">
        {mockActivityLogs.map((log) => {
          const time = new Date(log.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={log.id}
              className="py-3.5 flex items-start justify-between gap-4 font-body text-sm"
            >
              {/* Left Side: Context Details */}
              <div className="space-y-1">
                <p className="text-text font-medium">
                  <span className="font-semibold">{log.user_name}</span>
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
              <div className="text-right whitespace-nowrap">
                <span className="text-xs font-medium text-secondary tabular-nums">
                  {time}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="shrink-0 border-t border-border p-4">
        <button className="w-full text-sm font-medium text-primary hover:text-primary-hover transition-colors">
          View Full History →
        </button>
      </div>
    </div>
  );
};

export default RecentLogs;
