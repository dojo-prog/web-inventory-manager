import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import {
  addUser,
  getUsers,
  getUserById,
  removeUser,
  updateUser,
} from "./user.controller";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddUserInputSchema,
  UpdateUserInputSchema,
  UserFilterSchema,
  UserParamsSchema,
} from "@web-inventory-manager/shared";
import multerUpload from "../../lib/multer";

const router = express.Router();

router.use(protectRoute);

router.get(
  "/",
  authorizeRoles("admin"),
  validate({ query: UserFilterSchema }),
  getUsers,
);

router.post(
  "/",
  authorizeRoles("admin"),
  multerUpload.single("avatar"),
  validate({ body: AddUserInputSchema }),
  addUser,
);

router.get("/:userId", validate({ params: UserParamsSchema }), getUserById);

router.put(
  "/:userId",
  authorizeRoles("admin"),
  multerUpload.single("avatar"),
  validate({ params: UserParamsSchema, body: UpdateUserInputSchema }),
  updateUser,
);

router.delete(
  "/:userId",
  authorizeRoles("admin"),
  validate({ params: UserParamsSchema }),
  removeUser,
);

export default router;
