import { format, getWeek, nextMonday, nextSunday, setWeek } from "date-fns";
import { userFlow } from "consts";
import { FlowElement } from "typings";

export const setMonday = (date: Date) =>
  format(
    setWeek(nextMonday(new Date(date)), getWeek(date), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
    }),
    "LLLL d",
  );

export const setSunday = (date: Date) =>
  format(
    setWeek(nextSunday(new Date(date)), getWeek(date), {
      weekStartsOn: 1,
      firstWeekContainsDate: 2,
    }),
    "LLLL d",
  );

export const manageFlowElement = (filterCallback: (element: FlowElement) => boolean) =>
  [...userFlow.expense, ...userFlow.income]
    .filter(filterCallback)
    .sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate())
    .reduce((elements, flowElement) => {
      const chartName = new Date(flowElement.date).toISOString().split("T")[0];
      const expense = {
        ...flowElement,
        chartName,
      };

      elements.push(expense);
      return elements;
    }, [] as FlowElement[]);
