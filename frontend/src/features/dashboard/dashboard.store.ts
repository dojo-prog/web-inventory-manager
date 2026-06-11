import { create } from "zustand";
import type { DashboardState } from "./dashboard.types";

const useDashboardStore = create<DashboardState>((set) => ({
  summary: {
    total_units: 0,
    low_stock_units: 0,
    active_suppliers: 0,
  },

  lowStockProducts: [],
  recentActivityLogs: [],

  fetchingSummary: false,
  fetchingLowStockProducts: false,
  fetchingRecentLogs: false,

  fetchSummary: async () => {},
  fetchLowStocks: async () => {},
  fetchRecentLogs: async () => {},
}));

export default useDashboardStore;
