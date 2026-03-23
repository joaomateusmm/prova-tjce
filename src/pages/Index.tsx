import {
  ChevronLeft,
  ChevronRight,
  SkipForward,
  CheckCheck,
  Zap,
} from "lucide-react";
import { useCampaign } from "@/hooks/useCampaign";
import { QuestionCard } from "@/components/QuestionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionGrid } from "@/components/QuestionGrid";
import { ResultDashboard } from "@/components/ResultDashboard";
import { SubjectFilter } from "@/components/SubjectFilter";

const Index = () => {
  const {
    state,
    filteredQuestions,
    currentQuestion,
    totalCount,
    answeredCount,
    skippedCount,
    remainingCount,
    allAnswered,
    goTo,
    goNext,
    goPrev,
    skipQuestion,
    answerQuestion,
    finishCampaign,
    resetCampaign,
    setSubjectFilter,
    getResults,
    autoCompleteForTesting,
  } = useCampaign();

  // Resultado
  if (state.finished) {
    const results = getResults();
    return (
      <div className="min-h-screen bg-background px-4">
        <ResultDashboard
          correct={results.correct}
          wrong={results.wrong}
          total={results.total}
          details={results.details}
          onRestart={resetCampaign}
        />
      </div>
    );
  }

  const questionNumber = state.currentIndex + 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <div className="mb-2 flex items-center justify-between">
            <h1 className="text-base font-bold tracking-tight text-foreground">
              TJ/CE — Técnico Administrativo
            </h1>
            <div className="flex items-center gap-2">
              {/* NOVO BOTÃO DE TESTE ADICIONADO AQUI */}
              {!allAnswered && (
                <button
                  onClick={autoCompleteForTesting}
                  title="Auto Completar para Testes"
                  className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-500"
                >
                  <Zap className="h-3 w-3" />
                  Auto Teste
                </button>
              )}
              <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                Campanha
              </span>
            </div>
          </div>
          <ProgressBar
            answered={answeredCount}
            total={totalCount}
            remaining={remainingCount}
            skipped={skippedCount}
          />
        </div>
      </header>

      {/* RESTANTE DO CÓDIGO INALTERADO */}
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="mb-6">
          <SubjectFilter
            current={state.subjectFilter}
            onSelect={setSubjectFilter}
          />
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            {currentQuestion ? (
              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                selectedAnswer={state.answers[currentQuestion.id]}
                onAnswer={answerQuestion}
                questionNumber={questionNumber}
                totalQuestions={totalCount}
              />
            ) : (
              <p className="py-12 text-center text-muted-foreground">
                Nenhuma questão encontrada para este filtro.
              </p>
            )}

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                onClick={goPrev}
                disabled={state.currentIndex === 0}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-150 hover:bg-accent active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </button>

              <button
                onClick={skipQuestion}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-status-skipped transition-all duration-150 hover:bg-accent active:scale-[0.97]"
              >
                <SkipForward className="h-4 w-4" />
                Pular
              </button>

              <button
                onClick={goNext}
                disabled={state.currentIndex >= filteredQuestions.length - 1}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-150 hover:bg-accent active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none"
              >
                Próxima
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6">
              <button
                onClick={finishCampaign}
                disabled={!allAnswered}
                className={`w-full rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                  allAnswered
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <CheckCheck className="h-4 w-4" />
                  {allAnswered
                    ? "Finalizar Prova e Ver Resultado"
                    : `Responda todas as questões (${remainingCount} restante${remainingCount !== 1 ? "s" : ""})`}
                </span>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-28">
              <QuestionGrid
                questions={filteredQuestions}
                statuses={state.statuses}
                currentIndex={state.currentIndex}
                onSelect={goTo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
