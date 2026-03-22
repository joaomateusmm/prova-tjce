import { RotateCcw, Trophy, XCircle, CheckCircle2 } from "lucide-react";

interface ResultDashboardProps {
  correct: number;
  wrong: number;
  total: number;
  onRestart: () => void;
}

export function ResultDashboard({ correct, wrong, total, onRestart }: ResultDashboardProps) {
  const pctCorrect = total > 0 ? Math.round((correct / total) * 100) : 0;
  const pctWrong = total > 0 ? Math.round((wrong / total) * 100) : 0;

  return (
    <div className="mx-auto max-w-lg animate-fade-up space-y-8 py-12 text-center">
      <Trophy className="mx-auto h-16 w-16 text-primary" strokeWidth={1.5} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground" style={{ lineHeight: "1.1" }}>
        Resultado da Campanha
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-status-correct" />
          <p className="text-3xl font-bold tabular-nums text-foreground">{pctCorrect}%</p>
          <p className="mt-1 text-sm text-muted-foreground">{correct} acerto{correct !== 1 ? "s" : ""}</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <XCircle className="mx-auto mb-2 h-8 w-8 text-status-wrong" />
          <p className="text-3xl font-bold tabular-nums text-foreground">{pctWrong}%</p>
          <p className="mt-1 text-sm text-muted-foreground">{wrong} erro{wrong !== 1 ? "s" : ""}</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Total: {correct + wrong} de {total} questões
      </p>

      <button
        onClick={onRestart}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-150 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]"
      >
        <RotateCcw className="h-5 w-5" />
        Iniciar Nova Campanha
      </button>
    </div>
  );
}
