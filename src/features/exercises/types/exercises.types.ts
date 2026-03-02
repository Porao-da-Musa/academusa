export type Exercise = {
    id: string
    name: string
    category: string
    equipment: string
    level: 'Iniciante' | 'Intermediário' | 'Avançado'
    muscles: string[]
}