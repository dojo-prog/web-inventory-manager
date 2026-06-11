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
    set({ fetchingSummary: true });
    try {
      const summary = await dashboardService.fetchSummary();

      set({ summary });
    } catch (error) {
      errorHandler(error, "fetchSummary", true);
    } finally {
      set({ fetchingSummary: false });
    }
  },

  fetchLowStocks: async () => {
    set({ fetchingLowStockProducts: true });
    try {
      const lowStockProducts = await dashboardService.fetchLowStock();

      set({ lowStockProducts });
    } catch (error) {
      errorHandler(error, "fetchLowStocks", true);
    } finally {
      set({ fetchingLowStockProducts: false });
    }
  },

  fetchRecentLogs: async () => {
    set({ fetchingRecentLogs: true });

    try {
      const recentActivityLogs = await dashboardService.fetchRecentLogs();

      set({ recentActivityLogs });
    } catch (error) {
      errorHandler(error, "fetchRecentLogs", true);
    } finally {
      set({ fetchingRecentLogs: false });
    }
  },
}));

export default useDashboardStore;
