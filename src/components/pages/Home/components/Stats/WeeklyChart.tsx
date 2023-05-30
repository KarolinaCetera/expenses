import { FC } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { format } from "date-fns";
import { FlowElement, FlowElements } from "typings";
import { DataKey } from "recharts/types/util/types";

interface WeeklyChartProps {
  currentFlow: FlowElement[];
}

export const WeeklyChart: FC<WeeklyChartProps> = ({ currentFlow }) => {
  const cellFill = (element: FlowElement) => (element.type === FlowElements.EXPENSE ? "#7E32F9" : "#FF623B");
  const xAxisDataKey: DataKey<any> = ({ chartName }) => format(new Date(chartName), "d");
  const yAxisDataKey: DataKey<any> = (element) => element.amount;

  return (
    <ResponsiveContainer height={200}>
      <BarChart data={currentFlow} style={{ stroke: "#fff", strokeWidth: 2 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis dataKey={yAxisDataKey} />
        <Bar dataKey="amount" radius={[50, 50, 0, 0]} barSize={15}>
          {currentFlow.map((element) => (
            <Cell key={element.chartName} fill={cellFill(element)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
