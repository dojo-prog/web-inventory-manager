import bcrypt from "bcryptjs";

const generateHash = async (value: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(value, salt);
};

export default generateHash;
