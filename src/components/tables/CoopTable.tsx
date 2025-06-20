"use client";

import { useState } from "react";
import { Coop } from "@/types/coop";
import { formatCNPJ } from "@/utils/formatCnpj";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface CoopTableProps {
  data: Coop[];
}

const ITEMS_PER_PAGE = 10;

export function CoopTable({ data }: CoopTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<keyof Coop | "coopSystem" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const handleSort = (field: keyof Coop | "coopSystem") => {
    if (sortBy !== field) {
      setSortBy(field);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortBy(null);
      setSortOrder(null);
    }

    // Voltar para página 1 ao ordenar
    setCurrentPage(1);
  };

  const getSortedData = (data: Coop[]) => {
    if (!sortBy || !sortOrder) return data;

    return [...data].sort((a, b) => {
      let aValue: string, bValue: string;

      if (sortBy === "coopSystem") {
        aValue = a.coopSystem.name;
        bValue = b.coopSystem.name;
      } else {
        aValue = String(a[sortBy] ?? "");
        bValue = String(b[sortBy] ?? "");
      }

      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  const sortedData = getSortedData(data);
  const currentData = sortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const SortIndicator = ({
    active,
    order,
  }: {
    active: boolean;
    order: "asc" | "desc" | null;
  }) => {
    if (!active || !order) return <span className="ml-1 opacity-30">⬍</span>;
    return <span className="ml-1">{order === "asc" ? "▲" : "▼"}</span>;
  };

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Nome <SortIndicator active={sortBy === "name"} order={sortOrder} />
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("CNPJ")}
            >
              CNPJ <SortIndicator active={sortBy === "CNPJ"} order={sortOrder} />
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("state")}
            >
              Estado <SortIndicator active={sortBy === "state"} order={sortOrder} />
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("coopSystem")}
            >
              Sistema Cooperativo{" "}
              <SortIndicator active={sortBy === "coopSystem"} order={sortOrder} />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((coop) => (
            <TableRow key={coop.id}>
              <TableCell>{coop.name}</TableCell>
              <TableCell>{formatCNPJ(coop.CNPJ)}</TableCell>
              <TableCell>{coop.state}</TableCell>
              <TableCell>{coop.coopSystem.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Página {currentPage} de {totalPages}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </Button>
        </div>
      </div>
    </div>
  );
}
