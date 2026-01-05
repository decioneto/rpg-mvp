type ContentProps = {
  children: React.ReactNode;
  title: string;
};

export function Content({ children, title }: ContentProps) {
  return (
    <div className="w-217 flex flex-col items-center mt-20 relative">
      <div className="py-4 px-10 border-yellow-500/50 border bg-slate-950 absolute -top-8">
        {title}
      </div>
      <div className="px-8 py-8 pt-10 border-yellow-500/50 border">
        {children}
      </div>
    </div>
  );
}
