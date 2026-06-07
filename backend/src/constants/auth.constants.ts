import ENV from "../lib/env";

export const cookieOptions = {
  httpOnly: true,
  secure: ENV.NODE_ENV === "production",
  sameSite: "strict" as const,
};

export const userSelectProjection =
  "id, fname, lname, email, role, avatar_url, avatar_path";
