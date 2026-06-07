import { AddUserInput, User, UserFilter } from "@web-inventory-manager/shared";

export const findAll = async (filters: UserFilter) => {};
export const search = async (searchQuery: string) => {};
export const findById = async (userId: string) => {};
export const create = async (inputs: AddUserInput) => {};
export const update = async (changes: Partial<User>) => {};
export const remove = async (userId: string) => {};
