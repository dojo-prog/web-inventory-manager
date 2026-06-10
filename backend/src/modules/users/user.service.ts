import {
  AddUserInput,
  UpdateUserInput,
  User,
  UserFilter,
} from "@web-inventory-manager/shared";
import * as userModel from "./user.model";
import * as authModel from "../auth/auth.model";
import AppError from "../../utils/AppError";
import generateHash from "../../utils/generateHash";
import uploadImage from "../../storage/handlers/uploadImage";
import deleteImage from "../../storage/handlers/deleteImage";

export const getUsers = async (filters: UserFilter): Promise<User[]> => {
  return await userModel.findAll(filters);
};

export const getUserById = async (userId: string): Promise<User> => {
  const user = await userModel.findById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const addUser = async (
  inputs: AddUserInput,
  avatar?: Express.Multer.File,
): Promise<User> => {
  const { email, password } = inputs;

  // Existing email check
  const existing = await authModel.findByEmail(email);

  if (existing) {
    throw new AppError("Email already used", 400);
  }

  // Password hash
  const hash_password = await generateHash(password);

  let payload = {
    ...inputs,
    hash_password,
  };

  // Avatar upload
  if (avatar) {
    const { url, path } = await uploadImage(
      avatar,
      "user-avatars",
      "users/avatars",
    );

    payload.avatar_url = url;
    payload.avatar_path = path;
  }

  return await userModel.create(payload);
};

export const updateUser = async (
  userId: string,
  inputs: UpdateUserInput,
  avatar?: Express.Multer.File,
): Promise<User> => {
  const user = await userModel.findById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const changes = generateChanges(user, inputs);

  // Avatar change upload
  if (avatar) {
    const { url, path } = await uploadImage(
      avatar,
      "user-avatars",
      "user/avatars",
    );

    changes.avatar_url = url;
    changes.avatar_path = path;

    if (user.avatar_path) {
      await deleteImage("user-avatars", user.avatar_path);
    }
  }

  if (Object.keys(changes).length === 0) {
    throw new AppError("No changes has been made");
  }

  return await userModel.update(userId, changes);
};

export const removeUser = async (userId: string): Promise<User> => {
  const deletedUser = await userModel.remove(userId);

  if (!deletedUser) {
    throw new AppError("User not found", 404);
  }

  return deletedUser;
};
