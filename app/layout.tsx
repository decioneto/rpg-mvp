import { DM_Sans } from "next/font/google";
import "./globals.css";
import { PersonagemContextProvider } from "@/context/PersonagemContext";
import { UserContextProvider } from "@/context/UserContext";
import { TooltipProvider } from "@/components/ui/tooltip";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSans.className} antialiased min-h-screen bg-slate-950 text-slate-50`}
      >
        <UserContextProvider>
          <TooltipProvider>
            <PersonagemContextProvider>{children}</PersonagemContextProvider>
          </TooltipProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
