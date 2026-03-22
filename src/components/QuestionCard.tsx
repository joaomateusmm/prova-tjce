import { useState, useEffect } from "react";
import { ShuffledQuestion } from "@/hooks/useCampaign";
import { AlertCircle, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: ShuffledQuestion;
  selectedAnswer: string | undefined;
  onAnswer: (questionId: number, answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  // 1. Memórias para guardar as marcações
  const [eliminated, setEliminated] = useState<Set<string>>(new Set());
  const [marked, setMarked] = useState<Set<string>>(new Set());

  // 2. Limpeza ao mudar de questão
  useEffect(() => {
    setEliminated(new Set());
    setMarked(new Set());
  }, [question.id]);

  // 3. Funções aprimoradas para alternar os estados (Mutuamente Exclusivos)
  const toggleEliminated = (option: string) => {
    setEliminated((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(option)) {
        // Se já estava eliminada, apenas remove a eliminação
        newSet.delete(option);
      } else {
        // Se não estava, adiciona a eliminação
        newSet.add(option);
        // E garante que seja removida das marcações (dúvida)
        setMarked((prevMarked) => {
          const newMarked = new Set(prevMarked);
          newMarked.delete(option);
          return newMarked;
        });
      }
      return newSet;
    });
  };

  const toggleMarked = (option: string) => {
    setMarked((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(option)) {
        // Se já estava marcada, apenas remove a marcação
        newSet.delete(option);
      } else {
        // Se não estava, adiciona a marcação
        newSet.add(option);
        // E garante que seja removida das eliminações
        setEliminated((prevEliminated) => {
          const newEliminated = new Set(prevEliminated);
          newEliminated.delete(option);
          return newEliminated;
        });
      }
      return newSet;
    });
  };

  return (
    <div className="animate-scale-in">
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm shadow-primary/5">
        {/* Cabeçalho */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-md bg-primary px-2 text-sm font-semibold text-primary-foreground tabular-nums">
            {questionNumber}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {question.subject}
          </span>
          <span className="ml-auto text-xs text-muted-foreground tabular-nums">
            {questionNumber} / {totalQuestions}
          </span>
        </div>

        {/* Texto de Apoio */}
        {question.supportText && (
          <div className="mb-6 rounded-md border-l-4 border-primary/60 bg-muted/40 p-4 text-sm text-foreground/80 shadow-inner">
            {question.supportText.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-2 last:mb-0 leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Imagem */}
        {question.image && (
          <div className="mb-6 flex justify-center rounded-md bg-muted/20 p-2">
            <img
              src={question.image}
              alt={`Imagem de apoio da questão ${questionNumber}`}
              className="max-h-[400px] w-auto max-w-full rounded border border-border/50 object-contain shadow-sm"
            />
          </div>
        )}

        {/* Enunciado */}
        <p
          className="mb-6 text-base font-medium leading-relaxed text-foreground"
          style={{ maxWidth: "72ch", overflowWrap: "break-word" }}
        >
          {question.text}
        </p>

        {/* Opções */}
        <div className="flex flex-col gap-3">
          {question.shuffledOptions.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isEliminated = eliminated.has(option);
            const isMarked = marked.has(option);

            return (
              <div
                key={idx}
                className={`group relative flex w-full items-stretch rounded-lg border transition-all duration-150 ease-out ${
                  isSelected
                    ? "border-primary bg-primary/8 font-medium shadow-sm"
                    : isEliminated
                      ? "border-border/50 bg-muted/30"
                      : "border-border bg-card hover:border-primary/40 hover:bg-accent/60"
                }`}
              >
                <button
                  onClick={() => onAnswer(question.id, option)}
                  disabled={isEliminated}
                  className={`flex-1 px-4 py-3 text-left text-sm leading-relaxed ${
                    isEliminated
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }`}
                >
                  <span
                    className={`block pr-2 ${
                      isEliminated
                        ? "text-muted-foreground line-through decoration-muted-foreground/50"
                        : "text-foreground"
                    }`}
                    style={{ overflowWrap: "break-word" }}
                  >
                    {option}
                  </span>
                </button>

                <div className="flex items-center gap-1 border-l border-transparent px-2 transition-colors group-hover:border-border/50">
                  <button
                    onClick={() => toggleMarked(option)}
                    className={`rounded p-1.5 transition-colors ${
                      isMarked
                        ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-500"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                    title="Marcar como possível resposta"
                  >
                    <AlertCircle size={18} strokeWidth={isMarked ? 2.5 : 2} />
                  </button>

                  <button
                    onClick={() => toggleEliminated(option)}
                    className={`rounded p-1.5 transition-colors ${
                      isEliminated
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                    title="Eliminar esta alternativa"
                  >
                    <XCircle size={18} strokeWidth={isEliminated ? 2.5 : 2} />
                  </button>
                </div>

                {isSelected && (
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-primary" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
