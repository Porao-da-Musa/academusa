export type EquipmentStatus = {
  id: string;
  name: string;
  total: number;
  inUse: number;
  estimatedWaitMinutes?: number;
  machines: {
    id: string;
    name: string;
    status: "Disponível" | "Ocupado";
    remainingMinutes?: number;
  }[];
};
