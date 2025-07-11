"use client";

import { useEffect, useState } from "react";
import { Coop } from "@/types/coop";
import { getCoops } from "@/lib/api";
import { CoopTable } from "./CoopTable";
import { Loader } from "../common/Loader";
import { ErrorMessage } from "../common/ErrorMessage";
import CoopTableSkeleton from "./CoopTableSkeleton";

export function CoopTableWrapper() {
  const [data, setData] = useState<Coop[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    {/*throw new Error("Erro de teste — simulação");*/}

    getCoops()
      .then(setData)
      .catch(() => setError("Erro ao carregar dados da API"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CoopTableSkeleton />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0)
    return <p className="text-muted-foreground">Nenhuma cooperativa encontrada.</p>;

  return <CoopTable data={data} />;
}