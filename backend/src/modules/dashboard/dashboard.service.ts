import {
  DetailedActivityLog,
  LowStockProduct,
  Summary,
} from "@web-inventory-manager/shared";
import * as dashboardModel from "./dashboard.model";

export const getSummary = async (): Promise<Summary> => {
  return await dashboardModel.findSummary();
};

export const getLowStockProducts = async (): Promise<LowStockProduct[]> => {
  return await dashboardModel.findLowStock();
};

export const getRecentActivitie = async (): Promise<DetailedActivityLog[]> => {
  return await dashboardModel.findRecentLogs();
};
