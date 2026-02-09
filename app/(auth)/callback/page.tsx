"use client";

import { supabase } from "@/lib/supabase/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveUser } from "@/backend/services/UserService";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      if (data.session) {
        await saveUser(data.session.user);
        router.push("/personagens");
      }
    });
  }, [router]);

  return <p>Autenticando...</p>;
}
