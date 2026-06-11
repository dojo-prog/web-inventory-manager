import { Controller } from "../../types/handlers";
import * as dashboardService from "./dashboard.service";

export const getSummary: Controller = async (req, res, next) => {
  try {
    const summary = await dashboardService.getSummary();

    res.status(200).json({ success: true, summary });
  } catch (error) {
    next(error);
  }
};

export const getLowStockProducts: Controller = async (req, res, next) => {
  try {
    const products = await dashboardService.getLowStockProducts();

    res.status(200).json({ success: true, products });
  } catch (error) {
    next(error);
  }
};

export const getRecentActivitie: Controller = async (req, res, next) => {
  try {
    const recentActivities = await dashboardService.getRecentActivitie();

    res.status(200).json({ success: true, recentActivities });
  } catch (error) {
    next(error);
  }
};
