interface ProgressBarProps {
  answered: number;
  total: number;
  remaining: number;
  skipped: number;
}

export function ProgressBar({ answered, total, remaining, skipped }: ProgressBarProps) {
  const pct = total > 0 ? (answered / total) * 100 : 0;

  return (
    <div className="space-y-2">
      {/* Bar */}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Counters */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-status-answered" />
          {answered} respondida{answered !== 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-status-skipped" />
          {skipped} pulada{skipped !== 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-status-unseen" />
          {remaining} restante{remaining !== 1 ? "s" : ""}
        </span>
        <span className="ml-auto tabular-nums">
          {answered} de {total}
        </span>
      </div>
    </div>
  );
}
