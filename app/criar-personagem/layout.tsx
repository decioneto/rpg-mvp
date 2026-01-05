type CriarPersonagemLayoutProps = {
  children: React.ReactNode;
};

export default function CriarPersonagemLayoutPage({
  children,
}: CriarPersonagemLayoutProps) {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {children}
    </div>
  );
}
