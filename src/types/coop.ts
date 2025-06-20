
export interface Coop {
  id: string;
  name: string;
  CNPJ: string;
  state: string;
  coopSystem: CoopSystem;
}

export interface CoopSystem {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string | null;
  updatedBy: string | null;
}