"use client";

import { usePersonagemContext } from "@/context/PersonagemContext";
import { HealthBar } from "../HealthBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { useUserContext } from "@/context/UserContext";
import Link from "next/link";

export function Personagem() {
  const { name, level, classe, race } = usePersonagemContext();
  const { handleLogout } = useUserContext();

  return (
    <div className="w-full bg-slate-900 p-4 mb-4">
      <div className="flex justify-between">
        <div className="flex flex-col mb-2">
          <div className="flex gap-2">
            <div className="text-sm">{name}</div>
            <div className="text-sm text-slate-500">lvl {level}</div>
          </div>
          <div className="flex item-center gap-1">
            <span className="text-xs text-slate-500">{race?.name}</span>
            <span className="text-xs text-slate-500">-</span>
            <span className="text-xs text-slate-500">{classe?.name}</span>
          </div>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon-sm" variant="default">
                <Ellipsis width={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <Link href={"/personagens"}>
                  <DropdownMenuItem className="cursor-pointer">
                    Minha conta
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <HealthBar current={13} max={13} />
        <span className="text-sm text-slate-500">13</span>
      </div>
    </div>
  );
}
