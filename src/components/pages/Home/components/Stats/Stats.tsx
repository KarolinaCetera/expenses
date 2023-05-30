import { useCallback, useMemo, useState } from "react";
import { capitalize, Grid, Tabs, Typography } from "@mui/material";
import { format, getWeek } from "date-fns";
import { CustomTab, MonthlySelect, WeeklyChart, WeeklySelect } from "components";
import { getLatestWeek, isCurrentMonthFlow } from "utils";
import { FlowElement } from "typings";
import { manageFlowElement } from "./consts";
import { userFlow } from "consts";

enum Statistics {
  MONTHLY = "monthly",
  WEEKLY = "weekly",
}

export const Stats = () => {
  const [tab, setTab] = useState(Statistics.MONTHLY ? 1 : 0);
  const isSelectedMonthly = tab === 0;

  const [selectedDateMonthly, setSelectedDateMonthly] = useState<string>(format(new Date(), "LLLL yyy"));
  const [selectedDateWeekly, setSelectedDateWeekly] = useState<string>(
    `${getLatestWeek([...userFlow.income, ...userFlow.expense])}`,
  );

  const handleChangeStatisticsType = useCallback((e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  }, []);

  const monthFilterCallback = useCallback(
    (element: FlowElement) => {
      const [month, year] = selectedDateMonthly.split(" ");
      const selectedMonth = new Date(Date.parse(`${month}, ${year}`)).getMonth();
      return isCurrentMonthFlow(element, selectedMonth, +year);
    },
    [selectedDateMonthly],
  );

  const weekFilterCallback = useCallback(
    (element: FlowElement) => getWeek(element.date) === +selectedDateWeekly,
    [selectedDateWeekly],
  );

  const flowByMonth = useMemo(() => manageFlowElement(monthFilterCallback), [monthFilterCallback]);
  const flowByWeek = useMemo(() => manageFlowElement(weekFilterCallback), [weekFilterCallback]);

  const currentFlow = useMemo(() => (tab === 1 ? flowByWeek : flowByMonth), [flowByMonth, flowByWeek, tab]);

  // TODO monthly - pie chart of categories

  return (
    <Grid
      item
      xs={12}
      my={2}
      container
      sx={{
        background: "white",
        borderRadius: "15px",
      }}
    >
      <Grid item xs={12}>
        <Typography fontWeight="bold" letterSpacing={1} fontSize={(theme) => theme.typography.pxToRem(24)}>
          Statistics
        </Typography>
        <Tabs
          sx={{ background: "#FAF5FF", borderRadius: "10px", minHeight: 40, my: 2 }}
          value={tab}
          TabIndicatorProps={{ sx: { display: "none" } }}
          onChange={handleChangeStatisticsType}
        >
          {Object.values(Statistics).map((statisticType) => (
            <CustomTab key={statisticType} label={capitalize(statisticType)} />
          ))}
        </Tabs>
        <Grid item xs={12} my={2}>
          {isSelectedMonthly ? (
            <MonthlySelect selectedDate={selectedDateMonthly} setSelectedDate={setSelectedDateMonthly} />
          ) : (
            <WeeklySelect selectedDate={selectedDateWeekly} setSelectedDate={setSelectedDateWeekly} />
          )}
        </Grid>
        {isSelectedMonthly ? <Typography>Chart TODO</Typography> : <WeeklyChart currentFlow={currentFlow} />}
      </Grid>
    </Grid>
  );
};
