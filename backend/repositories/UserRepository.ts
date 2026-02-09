"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@supabase/supabase-js";

export async function saveUser(user: User) {
  await prisma.users.upsert({
    where: { id: user.id },
    update: {
      email: user.email,
      name: user.user_metadata?.full_name,
      avatarUrl: user.user_metadata?.avatar_url,
    },
    create: {
      id: user.id,
      email: user.email!,
      name: user.user_metadata?.full_name,
      avatarUrl: user.user_metadata?.avatar_url,
    },
  });
}
