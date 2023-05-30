import { FlowElements } from "typings";

export const getSummaryModel = (expense?: number, income?: number) => [
  {
    value: expense,
    icon: FlowElements.EXPENSE,
  },
  {
    value: income,
    icon: FlowElements.INCOME,
  },
];
