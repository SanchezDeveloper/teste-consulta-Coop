import { Coop } from "@/types/coop";

export async function getCoops(): Promise<Coop[]> {
  try {
    const res = await fetch("https://subscribe-api-production.up.railway.app/api/v1/coops");

    if (!res.ok) {
      throw new Error(`Erro da API: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Resposta da API não é um array de cooperativas.");
    }

    return data as Coop[];
  } catch (error) {
    console.error("Erro ao buscar cooperativas:", error);
    throw error;
  }
}

