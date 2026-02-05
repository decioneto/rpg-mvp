"use client";

import { useUserContext } from "@/context/UserContext";
import { LogoutButton } from "./LogoutButton";

export function Header() {
  const { user } = useUserContext();

  return (
    <div className="flex gap-4 items-center self-end">
      <span className="text-sm">
        {user?.user_metadata.full_name ?? user?.email}
      </span>
      <LogoutButton />
    </div>
  );
}
