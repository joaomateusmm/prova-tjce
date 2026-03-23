import {
  RotateCcw,
  Trophy,
  XCircle,
  CheckCircle2,
  Check,
  X,
} from "lucide-react";
import { ShuffledQuestion } from "@/hooks/useCampaign";

interface ResultDashboardProps {
  correct: number;
  wrong: number;
  total: number;
  // 1. Adicionamos a lista de detalhes aqui na interface
  details: {
    question: ShuffledQuestion;
    userAnswer: string;
    isCorrect: boolean;
  }[];
  onRestart: () => void;
}

export function ResultDashboard({
  correct,
  wrong,
  total,
  details,
  onRestart,
}: ResultDashboardProps) {
  const pctCorrect = total > 0 ? Math.round((correct / total) * 100) : 0;
  const pctWrong = total > 0 ? Math.round((wrong / total) * 100) : 0;

  return (
    // Aumentamos o max-w de lg para 4xl para acomodar bem a lista de revisão
    <div className="mx-auto max-w-4xl animate-fade-up space-y-12 py-12">
      {/* --- CABEÇALHO COM O PLACAR (Centralizado) --- */}
      <div className="text-center space-y-8">
        <Trophy className="mx-auto h-16 w-16 text-primary" strokeWidth={1.5} />
        <h1
          className="text-3xl font-bold tracking-tight text-foreground"
          style={{ lineHeight: "1.1" }}
        >
          Resultado da Campanha
        </h1>

        <div className="mx-auto grid max-w-lg grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-status-correct" />
            <p className="text-3xl font-bold tabular-nums text-foreground">
              {pctCorrect}%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {correct} acerto{correct !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <XCircle className="mx-auto mb-2 h-8 w-8 text-status-wrong" />
            <p className="text-3xl font-bold tabular-nums text-foreground">
              {pctWrong}%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {wrong} erro{wrong !== 1 ? "s" : ""}
            </p>
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

      {/* --- SESSÃO DE REVISÃO DAS QUESTÕES --- */}
      <div className="space-y-6 pt-8 border-t border-border">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Gabarito e Revisão
          </h2>
          <p className="text-muted-foreground">
            Revise suas respostas para fixar o conteúdo.
          </p>
        </div>

        <div className="space-y-6">
          {details.map((item, index) => (
            <div
              key={item.question.id}
              className={`overflow-hidden rounded-xl border bg-card shadow-sm transition-colors ${
                item.isCorrect ? "border-green-500/30" : "border-red-500/30"
              }`}
            >
              {/* Cabeçalho da Questão na Revisão */}
              <div
                className={`flex items-center justify-between border-b px-6 py-3 ${
                  item.isCorrect ? "bg-green-500/10" : "bg-red-500/10"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Questão {item.question.id} • {item.question.subject}
                </span>
                <span
                  className={`flex items-center gap-1.5 text-sm font-bold ${
                    item.isCorrect
                      ? "text-green-600 dark:text-green-500"
                      : "text-red-600 dark:text-red-500"
                  }`}
                >
                  {item.isCorrect ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Acertou
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4" /> Errou
                    </>
                  )}
                </span>
              </div>

              {/* Corpo da Questão */}
              <div className="p-6">
                <p className="mb-6 text-sm leading-relaxed text-foreground">
                  {item.question.text}
                </p>

                {/* Respostas */}
                <div className="space-y-3">
                  {/* Sua Resposta */}
                  <div
                    className={`flex items-start gap-3 rounded-lg p-4 text-sm ${
                      item.isCorrect
                        ? "bg-green-50 text-green-900 dark:bg-green-950/30 dark:text-green-300"
                        : "bg-red-50 text-red-900 dark:bg-red-950/30 dark:text-red-300"
                    }`}
                  >
                    {item.isCorrect ? (
                      <Check className="mt-0.5 h-5 w-5 shrink-0" />
                    ) : (
                      <X className="mt-0.5 h-5 w-5 shrink-0" />
                    )}
                    <div>
                      <span className="mb-1 block font-bold opacity-80">
                        Sua resposta:
                      </span>
                      <span className="font-medium">{item.userAnswer}</span>
                    </div>
                  </div>

                  {/* Resposta Correta (Aparece apenas se você errou) */}
                  {!item.isCorrect && (
                    <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4 text-sm text-green-900 dark:bg-green-950/30 dark:text-green-300">
                      <Check className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <span className="mb-1 block font-bold opacity-80">
                          Resposta correta:
                        </span>
                        <span className="font-medium">
                          {item.question.correctAnswer}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
