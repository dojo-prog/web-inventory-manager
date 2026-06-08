import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import {
  addUser,
  getAllUsers,
  getUserById,
  removeUser,
  updateUser,
} from "./user.controller";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddUserInputSchema,
  UpdateUserInputSchema,
} from "@web-inventory-manager/shared";

const router = express.Router();

router.use(protectRoute);

router.get("/", authorizeRoles("admin"), getAllUsers);
router.post(
  "/",
  validate(AddUserInputSchema),
  authorizeRoles("admin"),
  addUser,
);
router.get("/:userId", getUserById);
router.put(
  "/:userId",
  validate(UpdateUserInputSchema),
  authorizeRoles("admin"),
  updateUser,
);
router.delete("/:userId", authorizeRoles("admin"), removeUser);

export default router;
