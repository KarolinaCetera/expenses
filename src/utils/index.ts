import { defaultCurrency } from "consts";
import { Rates } from "http/currency";
import { DifferenceType, FlowElement } from "typings";
import { getWeek, getYear } from "date-fns";

export const getFlowDifference = (flow: FlowElement[], currentFlow?: FlowElement) => {
  if (!currentFlow)
    return {
      differenceType: DifferenceType.NONE,
      percentageDifference: 0,
      differenceText: "",
    };

  const previousExpense = flow
    .filter(({ date }) =>
      new Date().getMonth() !== 0
        ? new Date(date).getMonth() === new Date(currentFlow?.date).getMonth() - 1 &&
          new Date(date).getFullYear() === new Date(currentFlow?.date).getFullYear()
        : new Date(date).getMonth() === 11,
    )
    .pop()?.amount;

  if (!previousExpense)
    return {
      differenceType: DifferenceType.INCREASE,
      percentageDifference: 100,
      differenceText: "more than last month",
    };

  const differenceType = previousExpense > currentFlow.amount ? DifferenceType.DECREASE : DifferenceType.INCREASE;

  const percentageOfFlow = (currentFlow.amount / previousExpense) * 100;
  const percentageDifference =
    differenceType === DifferenceType.DECREASE ? 100 - percentageOfFlow : percentageOfFlow - 100;

  const differenceText =
    differenceType === DifferenceType.DECREASE ? "less than the last month" : "more than last month";

  return {
    differenceType,
    percentageDifference,
    differenceText,
  };
};

export const convertCurrency = (currency: keyof Rates, amount: number, rates?: Rates) => {
  if (!rates) return null;
  if (currency === defaultCurrency.id) return amount.toFixed(2);

  return (amount * rates[currency]).toFixed(2);
};

export const isCurrentMonthFlow = (element: FlowElement, selectedMonth?: number, selectedYear?: number) => {
  const currentMonth = selectedMonth ?? new Date().getMonth();
  const currentYear = selectedYear ?? new Date().getFullYear();
  const flowElementMonth = new Date(element.date).getMonth();
  const flowElementYear = new Date(element.date).getFullYear();
  return flowElementMonth === currentMonth && flowElementYear === currentYear;
};

export const getCurrentMonthFlow = (flowType: FlowElement[]) => {
  return flowType
    .reduce((income, element) => {
      if (isCurrentMonthFlow(element)) return (income += element.amount);

      return income;
    }, 0)
    .toFixed(2);
};

export const getLatestWeek = (flow: FlowElement[]) =>
  flow
    .filter(({ date }) => getYear(date) === new Date().getFullYear())
    .map(({ date }) => {
      return getWeek(date);
    })
    .reduce((acc, val) => {
      return acc > val ? acc : val;
    });
