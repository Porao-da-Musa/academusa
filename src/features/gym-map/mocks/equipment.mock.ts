import type { EquipmentStatus } from "../types/equipmentOccupation.mock";

export const equipmentMock: EquipmentStatus[] = [
  {
    id: "1",
    name: "Esteira",
    total: 10,
    inUse: 4,
    estimatedWaitMinutes: 0,
    machines: [
      { id: "1", name: "Esteira 1", status: "Ocupado", remainingMinutes: 10 },
      { id: "2", name: "Esteira 2", status: "Disponível" },
      { id: "3", name: "Esteira 3", status: "Ocupado", remainingMinutes: 5 },
      { id: "4", name: "Esteira 4", status: "Disponível" },
      { id: "5", name: "Esteira 5", status: "Disponível" },
      { id: "6", name: "Esteira 6", status: "Ocupado", remainingMinutes: 20 },
      { id: "7", name: "Esteira 7", status: "Disponível" },
      { id: "8", name: "Esteira 8", status: "Disponível" },
      { id: "9", name: "Esteira 9", status: "Ocupado", remainingMinutes: 12 },
      { id: "10", name: "Esteira 10", status: "Disponível" },
    ],
  },
  {
    id: "2",
    name: "Bicicleta Ergométrica",
    total: 5,
    inUse: 2,
    estimatedWaitMinutes: 10,
    machines: [
      { id: "1", name: "Bicicleta 1", status: "Ocupado", remainingMinutes: 8 },
      { id: "2", name: "Bicicleta 2", status: "Disponível" },
      { id: "3", name: "Bicicleta 3", status: "Ocupado", remainingMinutes: 10 },
      { id: "4", name: "Bicicleta 4", status: "Disponível" },
      { id: "5", name: "Bicicleta 5", status: "Disponível" },
    ],
  },
  {
    id: "3",
    name: "Leg Press",
    total: 3,
    inUse: 1,
    estimatedWaitMinutes: 20,
    machines: [
      { id: "1", name: "Leg Press 1", status: "Ocupado", remainingMinutes: 15 },
      { id: "2", name: "Leg Press 2", status: "Disponível" },
      { id: "3", name: "Leg Press 3", status: "Disponível" },
    ],
  },
  {
    id: "4",
    name: "Supino Reto",
    total: 4,
    inUse: 3,
    estimatedWaitMinutes: 25,
    machines: [
      {
        id: "1",
        name: "Supino Reto 1",
        status: "Ocupado",
        remainingMinutes: 20,
      },
      {
        id: "2",
        name: "Supino Reto 2",
        status: "Ocupado",
        remainingMinutes: 25,
      },
      {
        id: "3",
        name: "Supino Reto 3",
        status: "Ocupado",
        remainingMinutes: 30,
      },
      { id: "4", name: "Supino Reto 4", status: "Disponível" },
    ],
  },
];
