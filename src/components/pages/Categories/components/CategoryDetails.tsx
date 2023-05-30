import { FC, useMemo } from "react";
import { Else, If, Then } from "react-if";
import { Grid, Typography } from "@mui/material";
import { ArrowDownward as ArrowDownwardIcon, ArrowUpward as ArrowUpwardIcon } from "@mui/icons-material";
import { currentDate } from "consts";
import { DifferenceType, FlowElement } from "typings";
import { getFlowDifference } from "utils";

interface CategoryDetailsProps {
  category: {
    expense: FlowElement[];
    income: FlowElement[];
  };
}

export const CategoryDetails: FC<CategoryDetailsProps> = ({ category: { expense, income } }) => {
  const currentExpense = useMemo(
    () =>
      expense.find(
        ({ date }) =>
          new Date(date).getMonth() === currentDate.month && new Date(date).getFullYear() === currentDate.year,
      ),
    [expense],
  );

  const currentIncome = useMemo(
    () =>
      income.find(
        ({ date }) =>
          new Date(date).getMonth() === currentDate.month && new Date(date).getFullYear() === currentDate.year,
      ),
    [income],
  );

  const { differenceType: expenseDifferenceType, percentageDifference: expensePercentageDifference } =
    getFlowDifference(expense, currentExpense);

  const { differenceType: incomeDifferenceType, percentageDifference: incomePercentageDifference } = getFlowDifference(
    income,
    currentIncome,
  );

  return (
    <Grid item xs={12} alignItems="center" justifyContent="center">
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        {currentExpense ? (
          <Typography fontWeight="bolder" fontSize={12}>
            Expense: {currentExpense?.amount.toFixed(2)} {currentExpense?.currency}
          </Typography>
        ) : (
          <Typography fontWeight="bolder" fontSize={12}>
            No expense this month
          </Typography>
        )}
      </Grid>
      {currentExpense && (
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <If condition={expenseDifferenceType === DifferenceType.DECREASE}>
            <Then>
              <ArrowDownwardIcon
                fontSize="small"
                sx={{ width: 10, height: 10, color: "white", mr: 0.5, borderRadius: "50%", background: "#c9c9c9" }}
              />
            </Then>
            <Else>
              <ArrowUpwardIcon
                fontSize="small"
                sx={{ width: 10, height: 10, color: "white", mr: 0.5, borderRadius: "50%", background: "#c9c9c9" }}
              />
            </Else>
          </If>
          <Typography variant="caption" sx={{ color: "#919191FF" }} fontSize={12}>
            {expensePercentageDifference}%
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
