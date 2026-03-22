import { QuestionStatus, ShuffledQuestion } from "@/hooks/useCampaign";

interface QuestionGridProps {
  questions: ShuffledQuestion[];
  statuses: Record<number, QuestionStatus>;
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function QuestionGrid({ questions, statuses, currentIndex, onSelect }: QuestionGridProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Mapa de Questões
      </h3>
      <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-8 md:grid-cols-5">
        {questions.map((q, idx) => {
          const status = statuses[q.id] ?? "unseen";
          const isCurrent = idx === currentIndex;
          const bgClass =
            status === "answered"
              ? "bg-status-answered text-white"
              : status === "skipped"
              ? "bg-status-skipped text-white"
              : "bg-muted text-muted-foreground";

          return (
            <button
              key={q.id}
              onClick={() => onSelect(idx)}
              className={`flex h-8 w-full items-center justify-center rounded-md text-xs font-semibold tabular-nums transition-all duration-100 active:scale-95 ${bgClass} ${
                isCurrent ? "ring-2 ring-primary ring-offset-1" : ""
              }`}
            >
              {q.id}
            </button>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="mt-3 flex flex-wrap gap-3 text-[10px] font-medium text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded bg-muted border border-border" /> Não vista
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded bg-status-skipped" /> Pulada
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded bg-status-answered" /> Respondida
        </span>
      </div>
    </div>
  );
}
