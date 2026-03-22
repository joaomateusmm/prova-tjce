import { subjects, Subject } from "@/data/questions";

interface SubjectFilterProps {
  current: Subject | null;
  onSelect: (subject: Subject | null) => void;
}

export function SubjectFilter({ current, onSelect }: SubjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 active:scale-95 ${
          current === null
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted text-muted-foreground hover:bg-accent"
        }`}
      >
        Todas
      </button>
      {subjects.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 active:scale-95 ${
            current === s
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-muted-foreground hover:bg-accent"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
