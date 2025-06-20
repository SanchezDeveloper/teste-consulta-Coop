'use client';

import { Button } from "@/components/ui/button";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4 px-4">
      <h2 className="text-2xl font-semibold text-destructive">Ocorreu um erro</h2>
      <p className="text-muted-foreground max-w-md">
        Algo inesperado aconteceu ao carregar a página. Tente novamente ou entre em contato com o suporte.
      </p>
      <pre className="text-sm text-muted-foreground bg-muted p-4 rounded-md overflow-x-auto">
        {error.message}
      </pre>
      <Button onClick={reset}>Tentar novamente</Button>
    </div>
  );
}
