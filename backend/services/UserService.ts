import { User } from "@supabase/supabase-js";
import { saveUser as saveUserRepository } from "../repositories/UserRepository";

export async function saveUser(user: User) {
  try {
    await saveUserRepository(user);
  } catch (error) {
    console.log(error);
  }
}
