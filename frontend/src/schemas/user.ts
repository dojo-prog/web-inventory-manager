import {
  AddUserInputShape,
  UpdateUserInputShape,
} from "@web-inventory-manager/shared";
import { z } from "zod";

export const AddUserFormSchema = AddUserInputShape
  ? AddUserInputShape.extend({
      avatar: z
        .instanceof(File, { message: "Avatar uploaded is not a file" })
        .optional(),
    })
  : z.object({});

export const UpdateUserFormSchema = UpdateUserInputShape
  ? UpdateUserInputShape.extend({
      avatar: z
        .instanceof(File, { message: "Avatar uploaded is not a file" })
        .optional(),
    })
  : z.object({});

export type AddUserForm = z.input<typeof AddUserFormSchema>;
export type UpdateUserForm = z.input<typeof UpdateUserFormSchema>;
