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
  const [searchField, setSearchField] = useState<"name" | "CNPJ" | "state" | "coopSystem" | "" >("");
  const [searchTerm, setSearchTerm] = useState("");

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

    setCurrentPage(1);
  };

  const filteredData = data.filter((coop) => {
  const valueToCheck =
    searchField === "coopSystem"
      ? coop.coopSystem.name
      : String(coop[searchField as keyof Coop] ?? "");

    return valueToCheck.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

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

  const sortedData = getSortedData(filteredData);
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
    <div className="space-y-4 overflow-x-auto">

      

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
        <p className="text-sm font-bold text-gray-500">Buscar Específica: </p>
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value as any)}
          className="border rounded-md px-2 py-1 text-sm"
        >
          <option value="" disabled>Selecione um tipo</option>
          <option value="name">Nome</option>
          <option value="CNPJ">CNPJ</option>
          <option value="state">Estado</option>
          <option value="coopSystem">Sistema Cooperativo</option>
        </select>

        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          disabled={!searchField}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-md px-2 py-1 text-sm w-full sm:w-64"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-muted transition-colors">
            <TableHead
              className="cursor-pointer select-none text-sm  hover:text-foreground transition-colors "
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
              className="cursor-pointer "
              onClick={() => handleSort("coopSystem")}
            >
              Sistema Cooperativo{" "}
              <SortIndicator active={sortBy === "coopSystem"} order={sortOrder} />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground py-6">
                Nenhuma cooperativa encontrada para os critérios de busca.
              </TableCell>
            </TableRow>
          ) : (
            currentData.map((coop) => (
              <TableRow key={coop.id} className="hover:bg-muted transition-colors">
                <TableCell className="font-medium">{coop.name}</TableCell>
                <TableCell>{formatCNPJ(coop.CNPJ)}</TableCell>
                <TableCell>{coop.state}</TableCell>
                <TableCell>{coop.coopSystem.name}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Página {currentPage} de {totalPages}
        </span>
        <div className="space-x-2">
          <Button
            aria-label="Página anterior"
            variant="outline"
            size="sm"
            className="rounded-lg"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Anterior 
          </Button>
          <Button
            aria-label="Próxima página"
            variant="outline"
            size="sm"
            className="rounded-lg"
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
