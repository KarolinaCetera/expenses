import { FC, useMemo } from "react";
import { capitalize, Grid, Typography } from "@mui/material";
import { ArrowDownward as ArrowDownwardIcon, ArrowUpward as ArrowUpwardIcon } from "@mui/icons-material";
import { Else, If, Then } from "react-if";
import { currentDate } from "consts";
import { getFlowDifference } from "utils";
import { DifferenceType, FlowElement } from "typings";

interface CategoryBannerContentProps {
  flowElement: FlowElement[];
  type: "income" | "expense";
}

export const CategoryBannerContent: FC<CategoryBannerContentProps> = ({ type, flowElement }) => {
  const currentFlow = useMemo(
    () =>
      flowElement.find(
        ({ date }) =>
          new Date(date).getMonth() === currentDate.month && new Date(date).getFullYear() === currentDate.year,
      ),
    [flowElement],
  );

  const { differenceType, percentageDifference } = getFlowDifference(flowElement, currentFlow);

  const isDecrease = differenceType === DifferenceType.DECREASE;

  return (
    <Grid container alignItems="center" justifyContent="space-between" item xs={12}>
      <Grid item xs={3}>
        <Typography color="black" fontSize={14} fontWeight="bold">
          {capitalize(type)}
        </Typography>
      </Grid>
      <Grid container alignItems="center" item xs={9}>
        {currentFlow ? (
          <>
            <Grid item xs={6}>
              <Typography
                fontSize={14}
                color="#FE8558"
                fontWeight="bolder"
              >{`${currentFlow.amount} ${currentFlow.currency} `}</Typography>
            </Grid>
            <Grid item xs={6}>
              <If condition={isDecrease}>
                <Then>
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ width: 12, height: 12, color: "white", mr: 0.5, borderRadius: "50%", background: "#f6c4c4" }}
                  />
                </Then>
                <Else>
                  <ArrowUpwardIcon
                    fontSize="small"
                    sx={{ width: 12, height: 12, color: "white", mr: 0.5, borderRadius: "50%", background: "#c9dea8" }}
                  />
                </Else>
              </If>
              <Typography variant="caption" color="#919191FF" fontSize={14}>
                {percentageDifference.toFixed(2)}%
              </Typography>
            </Grid>
          </>
        ) : (
          <Grid>
            <Typography color="#919191FF" fontSize={14}>
              None this month
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
