import {
  UserFilter,
  UserFilterSchema,
} from "@web-inventory-manager/shared/dist";
import { Controller } from "../../types/handlers";
import * as userService from "./user.service";
import AppError from "../../utils/AppError";

export const getUsers: Controller = async (req, res, next) => {
  try {
    const { users, total_count } = await userService.getUsers(req.query);

    res.status(200).json({ success: true, users, total_count });
  } catch (error) {
    next(error);
  }
};

export const getUserById: Controller = async (req, res, next) => {
  try {
    const userId = req.params.userId as string;

    const user = await userService.getUserById(userId);

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

export const addUser: Controller = async (req, res, next) => {
  try {
    const avatar = req.file;

    const newUser = await userService.addUser(req.body, avatar);

    res.status(200).json({ success: true, newUser });
  } catch (error) {
    next(error);
  }
};

export const updateUser: Controller = async (req, res, next) => {
  try {
    const avatar = req.file;
    const userId = req.params.userId as string;

    const updatedUser = await userService.updateUser(userId, req.body, avatar);

    res.status(200).json({ success: true, updatedUser });
  } catch (error) {
    next(error);
  }
};

export const removeUser: Controller = async (req, res, next) => {
  try {
    const userId = req.params.userId as string;

    const removedUser = await userService.removeUser(req.body);

    res.status(200).json({ success: true, removeUser });
  } catch (error) {
    next(error);
  }
};
