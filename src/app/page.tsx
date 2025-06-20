import { CoopTableWrapper } from "@/components/tables/CoopTableWrapper";

export default async function HomePage() {

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Cooperativas</h1>
      <CoopTableWrapper />

    </main>
  );
}
