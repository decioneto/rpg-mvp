"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Erro ao sair:", error.message);
      return;
    }

    // força o middleware e server components a revalidarem
    router.refresh();

    // redireciona para login
    router.push("/signin");
  }

  return <Button onClick={handleLogout}>Sair</Button>;
}
