import { create } from "zustand";
import type { DashboardState } from "./dashboard.types";
import errorHandler from "../../utils/errorHandler";
import * as dashboardService from "./dashboard.service";

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

  fetchSummary: async () => {
    try {
      const summary = await dashboardService.fetchSummary();

      set({ summary });
    } catch (error) {
      errorHandler(error, "fetchSummary", true);
    }
  },

  fetchLowStocks: async () => {
    try {
      const lowStockProducts = await dashboardService.fetchLowStock();

      set({ lowStockProducts });
    } catch (error) {
      errorHandler(error, "fetchLowStocks", true);
    }
  },

  fetchRecentLogs: async () => {
    try {
      const recentActivityLogs = await dashboardService.fetchRecentLogs();

      set({ recentActivityLogs });
    } catch (error) {
      errorHandler(error, "fetchRecentLogs", true);
    }
  },
}));

export default useDashboardStore;
