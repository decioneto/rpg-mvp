import { Button } from "@/components/ui/button";
import { Input } from "@/ui-components/Input";
import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { GoogleLoginButton } from "./components/GoogleLoginButton";

export default async function SignInPagePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Title text="Faça o login" />

      <div className="flex flex-col gap-8 items-center">
        <form className="flex flex-col gap-4 mt-14 w-100">
          <Input
            label="E-mail"
            id="email"
            hasLabel
            placeholder="Digite seu e-mail"
          />
          <Input
            label="Password"
            id="email"
            hasLabel
            placeholder="Digite sua senha"
            type="password"
          />
          <div className="flex items-center justify-end gap-4">
            <div className="flex gap-2">
              <p className="text-slate-500">Novo por aqui?</p>
              <Link href={"#"} className="text-yellow-500">
                Crie sua conta
              </Link>
            </div>
            <Button type="submit">Entrar</Button>
          </div>
        </form>
        <div className="border-b border-slate-700 w-full" />
        <p>Ou faça o login com</p>
        <GoogleLoginButton />
      </div>
    </div>
  );
}
