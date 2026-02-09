"use client";

import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/UserContext";

type LoginButtonProps = {
  className?: string;
};

export function LogoutButton({ className }: LoginButtonProps) {
  const { handleLogout } = useUserContext();

  return (
    <Button size="sm" onClick={handleLogout} className={className}>
      Sair
    </Button>
  );
}
