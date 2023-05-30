import { useMemo } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useSnackbar } from "notistack";
import { SummaryBalance, SummaryMonth } from "components";
import { userFlow } from "consts";
import { useCurrencyConverter } from "http/currency";
import { lightTheme } from "styles";
import { FlowElements } from "typings";
import { getCurrentMonthFlow } from "utils";
import { getSummaryModel } from "../../shared";

export const Summary = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { data: rates, isLoading: isRatesLoading, isError: isErrorOnRates, error: ratesError } = useCurrencyConverter();

  const currentMonthIncome = getCurrentMonthFlow(userFlow[FlowElements.INCOME]);
  const currentMonthExpenses = getCurrentMonthFlow(userFlow[FlowElements.EXPENSE]);

  const monthBudget = useMemo(
    () => +currentMonthIncome - +currentMonthExpenses,
    [currentMonthExpenses, currentMonthIncome],
  );

  const balanceElements = useMemo(
    () => getSummaryModel(+currentMonthExpenses, +currentMonthIncome),
    [currentMonthExpenses, currentMonthIncome],
  );

  if (isRatesLoading) return <CircularProgress />;

  if (isErrorOnRates && ratesError) {
    enqueueSnackbar(ratesError.message);
  }

  if (!rates) return null;

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-evenly"
      p={0}
      sx={{
        width: "100%",
        background: "linear-gradient(34deg, rgba(63,94,251,1) 0%, rgba(213,70,252,1) 38%, rgba(243,148,84,1) 83%)",
        p: 3,
        borderRadius: "20px",
        ".MuiTypography-root": {
          color: lightTheme.palette.common.white,
        },
      }}
    >
      <SummaryMonth monthBudget={monthBudget} rates={rates.data} />
      <Grid container>
        {balanceElements.map(({ value, icon }) => (
          <SummaryBalance key={icon} value={value} icon={icon} rates={rates.data} />
        ))}
      </Grid>
    </Grid>
  );
};
