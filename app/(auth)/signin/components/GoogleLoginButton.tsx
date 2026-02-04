"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";

export function GoogleLoginButton() {
  async function handleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/callback`,
      },
    });
  }

  return (
    <Button className="flex gap-4" onClick={handleLogin}>
      <Image width={24} height={24} src={"/google.svg"} alt="google logo" />
      Sua conta Google
    </Button>
  );
}
