import { User } from "@web-inventory-manager/shared";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
