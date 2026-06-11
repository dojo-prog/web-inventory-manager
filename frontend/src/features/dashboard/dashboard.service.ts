import type {
  DetailedActivityLog,
  LowStockProduct,
  Summary,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchSummary = async (): Promise<Summary> => {
  const res = await axios.get("/dashboard/summary");

  return res.data.summary;
};

export const fetchLowStock = async (): Promise<LowStockProduct[]> => {
  const res = await axios.get("/dashboard/low-stock");

  return res.data.products;
};

export const fetchRecentLogs = async (): Promise<DetailedActivityLog[]> => {
  const res = await axios.get("/dashboard/recent-activities");

  return res.data.recentActivities;
};
