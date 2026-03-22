import { useNavigate } from "react-router-dom";

export default function Home() {
  // O useNavigate é a ferramenta que nos permite trocar de página via código
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="w-full max-w-md animate-fade-in space-y-8 rounded-xl border border-border bg-card p-8 text-center shadow-lg">
        {/* Título e Textos */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Simulado TJ/CE
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Treine com questões reais do concurso. A cada nova campanha, as
            opções são embaralhadas para você aprender o conteúdo de verdade,
            sem decoreba.
          </p>
        </div>

        {/* Botão de Iniciar */}
        <button
          onClick={() => navigate("/prova")} // Aqui é onde a mágica do redirecionamento acontece
          className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
        >
          Iniciar Nova Campanha
        </button>
      </div>
    </div>
  );
}
