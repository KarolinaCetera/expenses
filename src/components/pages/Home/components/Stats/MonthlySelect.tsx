import { FC, useCallback } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { format } from "date-fns";
import { userFlow } from "consts";

interface MonthlySelectProps {
  selectedDate: string;
  setSelectedDate: (e: string) => void;
}

export const MonthlySelect: FC<MonthlySelectProps> = ({ selectedDate, setSelectedDate }) => {
  const handleChangeMonth = useCallback(
    (e: SelectChangeEvent) => {
      setSelectedDate(e.target.value);
    },
    [setSelectedDate],
  );

  const flowDatesByMonth = new Set(
    [...userFlow.income, ...userFlow.expense].map((flowElement) => {
      return format(flowElement.date, "LLLL yyy");
    }),
  );

  return (
    <Select fullWidth onChange={(e: SelectChangeEvent) => handleChangeMonth(e)} value={selectedDate}>
      {Array.from(flowDatesByMonth).map((flowDate) => (
        <MenuItem key={flowDate} value={flowDate}>
          <span>{flowDate}</span>
        </MenuItem>
      ))}
    </Select>
  );
};
