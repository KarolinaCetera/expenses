import { FC, useCallback } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { getWeek } from "date-fns";
import { userFlow } from "consts";
import { setMonday, setSunday } from "./consts";

interface WeeklySelectProps {
  selectedDate: string;
  setSelectedDate: (e: string) => void;
}

type FlowDatesByWeeks = {
  weekNumber: number;
  weekMonday: string;
  weekSunday: string;
};

export const WeeklySelect: FC<WeeklySelectProps> = ({ selectedDate, setSelectedDate }) => {
  const handleChangeWeek = useCallback(
    (e: SelectChangeEvent) => {
      setSelectedDate(e.target.value);
    },
    [setSelectedDate],
  );

  const flowDatesByWeeks = [...userFlow.income, ...userFlow.expense]
    .map(({ date }) => ({
      weekNumber: getWeek(date),
      weekMonday: setMonday(date),
      weekSunday: setSunday(date),
    }))
    .reduce((acc, current) => {
      const duplicate = acc.find((item) => item.weekNumber === current.weekNumber);
      return duplicate ? acc : acc.concat([current]);
    }, [] as FlowDatesByWeeks[])
    .sort((a, b) => b.weekNumber - a.weekNumber);

  return (
    <Select
      fullWidth
      placeholder="Select week"
      onChange={(e: SelectChangeEvent) => handleChangeWeek(e)}
      value={selectedDate}
      defaultValue=""
    >
      {Array.from(flowDatesByWeeks).map((flowDate) => (
        <MenuItem key={`${flowDate.weekNumber}`} value={flowDate.weekNumber}>
          {`${flowDate.weekMonday} - ${flowDate.weekSunday}`}
        </MenuItem>
      ))}
    </Select>
  );
};
