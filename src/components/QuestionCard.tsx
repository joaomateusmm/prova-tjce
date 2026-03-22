import { ShuffledQuestion } from "@/hooks/useCampaign";

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
  return (
    <div className="animate-scale-in">
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm shadow-primary/5">
        {/* Cabeçalho da Questão (Header) */}
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

        {/* 1. Texto de Apoio (Renderização Condicional) */}
        {question.supportText && (
          <div className="mb-6 rounded-md border-l-4 border-primary/60 bg-muted/40 p-4 text-sm text-foreground/80 shadow-inner">
            {/* O código abaixo divide o texto onde tem \n e cria parágrafos separados */}
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

        {/* 2. Imagem da Questão (Renderização Condicional) */}
        {question.image && (
          <div className="mb-6 flex justify-center rounded-md bg-muted/20 p-2">
            <img
              src={question.image}
              alt={`Imagem de apoio da questão ${questionNumber}`}
              className="max-h-[400px] w-auto max-w-full rounded border border-border/50 object-contain shadow-sm"
            />
          </div>
        )}

        {/* 3. Enunciado Principal */}
        <p
          className="mb-6 text-base font-medium leading-relaxed text-foreground"
          style={{ maxWidth: "72ch", overflowWrap: "break-word" }}
        >
          {question.text}
        </p>

        {/* Opções de Resposta */}
        <div className="flex flex-col gap-3">
          {question.shuffledOptions.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            return (
              <button
                key={idx}
                onClick={() => onAnswer(question.id, option)}
                className={`group relative w-full rounded-lg border px-4 py-3 text-left text-sm leading-relaxed transition-all duration-150 ease-out active:scale-[0.98] ${
                  isSelected
                    ? "border-primary bg-primary/8 font-medium text-foreground shadow-sm"
                    : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-accent/60"
                }`}
              >
                <span
                  className="pointer-events-none pr-6 block"
                  style={{ overflowWrap: "break-word" }}
                >
                  {option}
                </span>
                {isSelected && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
