import { Coop } from "@/types/coop";

export async function getCoops(): Promise<Coop[]> {
  const res = await fetch("https://subscribe-api-production.up.railway.app/api/v1/coops");

  if (!res.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  const data = await res.json();
  return data as Coop[];
}
