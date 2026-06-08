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
import multerUpload from "../../lib/multer";

const router = express.Router();

router.use(protectRoute);

router.get("/", authorizeRoles("admin"), getAllUsers);
router.post(
  "/",
  authorizeRoles("admin"),
  multerUpload.single("avatar"),
  validate(AddUserInputSchema),
  addUser,
);
router.get("/:userId", getUserById);
router.put(
  "/:userId",
  authorizeRoles("admin"),
  multerUpload.single("avatar"),
  validate(UpdateUserInputSchema),
  updateUser,
);
router.delete("/:userId", authorizeRoles("admin"), removeUser);

export default router;
