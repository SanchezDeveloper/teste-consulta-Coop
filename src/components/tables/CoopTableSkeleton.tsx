import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function CoopTableSkeleton() {
  const rows = Array.from({ length: 10 });

  return (
    <div className="border rounded-md overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>CNPJ</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Sistema Cooperativo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-4 w-40" /></TableCell>
              <TableCell><Skeleton className="h-4 w-32" /></TableCell>
              <TableCell><Skeleton className="h-4 w-10" /></TableCell>
              <TableCell><Skeleton className="h-4 w-32" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
