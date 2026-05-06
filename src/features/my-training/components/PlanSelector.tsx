import type { PlanSelectorProps } from "../types/training.types";

export function PlanSelector({
  selectedPlan,
  onChangePlan,
  plans,
}: PlanSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      <select
        value={selectedPlan}
        onChange={(e) => onChangePlan(e.target.value)}
        className=" text-black relative z-30 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {plans.map((plan) => (
          <option key={plan.id} value={plan.id}>
            {plan.name}
          </option>
        ))}
      </select>
    </div>
  );
}
