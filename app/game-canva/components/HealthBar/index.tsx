type HealthBarProps = {
  current: number;
  max: number;
};

export function HealthBar({ current, max }: HealthBarProps) {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));

  const color =
    percentage >= 80
      ? "bg-green-500"
      : percentage >= 40
        ? "bg-yellow-500"
        : "bg-red-500";

  return (
    <div className="w-full h-1 rounded bg-slate-600 overflow-hidden">
      <div
        className={`h-full transition-all duration-300 ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
