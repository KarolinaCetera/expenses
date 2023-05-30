import { Rates } from "http/currency";

export type CurrencyType = keyof Rates;
export type Currency = {
  id: CurrencyType;
};

export enum DifferenceType {
  INCREASE = "increase",
  DECREASE = "decrease",
  NONE = "none",
}

export enum FlowElements {
  EXPENSE = "expense",
  INCOME = "income",
}

export type FlowDate = {
  day?: number;
  month: number;
  year: number;
};

export interface FlowElement {
  date: Date;
  name: string;
  amount: number;
  currency: CurrencyType;
  type: FlowElements;
  category: ElementCategoryName;
  chartName?: string | number;
  notes?: string;
}

export type UserFlow = {
  [FlowElements.INCOME]: FlowElement[];
  [FlowElements.EXPENSE]: FlowElement[];
};

export enum ElementCategoryName {
  WORK = "work",
  FUN = "fun",
  OTHER = "other",
  CAR = "car",
  BILLS = "bills",
  SHOPPING = "shopping",
}

export type CategoryType = { name: ElementCategoryName; color: string; icon: JSX.Element };
