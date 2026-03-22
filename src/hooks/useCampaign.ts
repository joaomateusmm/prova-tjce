import { useState, useCallback, useMemo } from "react";
import { questions, Question, Subject } from "@/data/questions";
import { shuffle } from "@/lib/shuffle";

export type QuestionStatus = "unseen" | "skipped" | "answered";

export interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
}

export interface CampaignState {
  questions: ShuffledQuestion[];
  currentIndex: number;
  answers: Record<number, string>; // questionId -> chosen answer text
  statuses: Record<number, QuestionStatus>;
  finished: boolean;
  subjectFilter: Subject | null;
}

function buildShuffledQuestions(): ShuffledQuestion[] {
  return questions.map((q) => ({
    ...q,
    shuffledOptions: shuffle([q.correctAnswer, ...q.wrongAnswers]),
  }));
}

export function useCampaign() {
  const [state, setState] = useState<CampaignState>(() => ({
    questions: buildShuffledQuestions(),
    currentIndex: 0,
    answers: {},
    statuses: {},
    finished: false,
    subjectFilter: null,
  }));

  const filteredQuestions = useMemo(() => {
    if (!state.subjectFilter) return state.questions;
    return state.questions.filter((q) => q.subject === state.subjectFilter);
  }, [state.questions, state.subjectFilter]);

  const currentQuestion = filteredQuestions[state.currentIndex] ?? null;

  const totalCount = filteredQuestions.length;
  const answeredCount = filteredQuestions.filter(
    (q) => state.statuses[q.id] === "answered"
  ).length;
  const skippedCount = filteredQuestions.filter(
    (q) => state.statuses[q.id] === "skipped"
  ).length;
  const remainingCount = totalCount - answeredCount;

  const allAnswered = answeredCount === totalCount && totalCount > 0;

  const goTo = useCallback((index: number) => {
    setState((s) => ({ ...s, currentIndex: Math.max(0, Math.min(index, s.questions.length - 1)) }));
  }, []);

  const goNext = useCallback(() => {
    setState((s) => {
      const filtered = s.subjectFilter
        ? s.questions.filter((q) => q.subject === s.subjectFilter)
        : s.questions;
      return { ...s, currentIndex: Math.min(s.currentIndex + 1, filtered.length - 1) };
    });
  }, []);

  const goPrev = useCallback(() => {
    setState((s) => ({ ...s, currentIndex: Math.max(0, s.currentIndex - 1) }));
  }, []);

  const skipQuestion = useCallback(() => {
    setState((s) => {
      const q = (s.subjectFilter
        ? s.questions.filter((q) => q.subject === s.subjectFilter)
        : s.questions)[s.currentIndex];
      if (!q || s.statuses[q.id] === "answered") return s;
      const filtered = s.subjectFilter
        ? s.questions.filter((q) => q.subject === s.subjectFilter)
        : s.questions;
      return {
        ...s,
        statuses: { ...s.statuses, [q.id]: "skipped" },
        currentIndex: Math.min(s.currentIndex + 1, filtered.length - 1),
      };
    });
  }, []);

  const answerQuestion = useCallback((questionId: number, answer: string) => {
    setState((s) => ({
      ...s,
      answers: { ...s.answers, [questionId]: answer },
      statuses: { ...s.statuses, [questionId]: "answered" },
    }));
  }, []);

  const finishCampaign = useCallback(() => {
    setState((s) => ({ ...s, finished: true }));
  }, []);

  const resetCampaign = useCallback(() => {
    setState({
      questions: buildShuffledQuestions(),
      currentIndex: 0,
      answers: {},
      statuses: {},
      finished: false,
      subjectFilter: null,
    });
  }, []);

  const setSubjectFilter = useCallback((subject: Subject | null) => {
    setState((s) => ({ ...s, subjectFilter: subject, currentIndex: 0 }));
  }, []);

  const getResults = useCallback(() => {
    const allQs = state.questions;
    let correct = 0;
    let wrong = 0;
    const details: { question: ShuffledQuestion; userAnswer: string; isCorrect: boolean }[] = [];

    allQs.forEach((q) => {
      const userAnswer = state.answers[q.id];
      if (userAnswer) {
        const isCorrect = userAnswer === q.correctAnswer;
        if (isCorrect) correct++;
        else wrong++;
        details.push({ question: q, userAnswer, isCorrect });
      }
    });

    return { correct, wrong, total: allQs.length, details };
  }, [state.questions, state.answers]);

  return {
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
  };
}
