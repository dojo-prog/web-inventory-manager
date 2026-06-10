import { Controller } from "../../types/handlers";
import * as activityLogService from "./activity_log.service";

export const getActivityLogs: Controller = async (req, res, next) => {
  try {
    const activityLogs = await activityLogService.getActivityLogs(
      req.query as any,
    );

    res.status(200).json({ sucess: true, activityLogs });
  } catch (error) {
    next(error);
  }
};

export const getLogById: Controller = async (req, res, next) => {
  try {
    const logId = req.params.logId as string;

    const activityLog = await activityLogService.getLogById(logId);

    res.status(200).json({ success: true, activityLog });
  } catch (error) {
    next(error);
  }
};
