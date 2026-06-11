import type {
  DetailedActivityLog,
  LowStockProduct,
  Summary,
} from "@web-inventory-manager/shared";

export interface DashboardState {
  summary: Summary;
  lowStockProducts: LowStockProduct[];
  recentActivityLogs: DetailedActivityLog[];

  fetchingSummary: boolean;
  fetchingLowStockProducts: boolean;
  fetchingRecentLogs: boolean;

  fetchSummary: () => Promise<void>;
  fetchLowStocks: () => Promise<void>;
  fetchRecentLogs: () => Promise<void>;
}
