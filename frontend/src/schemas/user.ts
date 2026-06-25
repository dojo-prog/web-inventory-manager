import {
  AddUserInputShape,
  UpdateUserInputShape,
} from "@web-inventory-manager/shared";
import { z } from "zod";

export const AddUserFormSchema = AddUserInputShape.extend({
  avatar: z.instanceof(File, { message: "Avatar uploaded is not a file" }),
});

export const UpdateUserFormSchema = UpdateUserInputShape.extend({
  avatar: z.instanceof(File, { message: "Avatar uploaded is not a file" }),
});

export type AddUserForm = z.input<typeof AddUserFormSchema>;
export type UpdateUserForm = z.input<typeof UpdateUserFormSchema>;
