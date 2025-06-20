import { CoopTableWrapper } from "@/components/tables/CoopTableWrapper";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export default async function HomePage() {

  return (
    <main className="p-4 sm:p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Lista de Cooperativas</h1>
        <ThemeToggle />
      </div>
      <CoopTableWrapper />
    </main>
  );
}
