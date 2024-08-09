// src/services/authService.ts
import User from '../models/User';

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (user && user.password === password) {
    return { success: true };
  }
  return { success: false };
};
