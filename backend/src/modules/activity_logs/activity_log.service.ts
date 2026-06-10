import {
  ActivityLog,
  ActivityLogFilter,
  CreateLogInput,
} from "@web-inventory-manager/shared";
import * as activityLogModel from "./activity_log.model";
import AppError from "../../utils/AppError";

export const getActivityLogs = async (
  filters: ActivityLogFilter,
): Promise<ActivityLog[]> => {
  return await activityLogModel.findAll(filters);
};

export const getLogById = async (logId: string): Promise<ActivityLog> => {
  const activityLog = await activityLogModel.findById(logId);

  if (!activityLog) {
    throw new AppError("Activity log not found", 404);
  }

  return activityLog;
};

export const createAuditEntry = async (payload: CreateLogInput) => {
  await activityLogModel.create(payload);
};
