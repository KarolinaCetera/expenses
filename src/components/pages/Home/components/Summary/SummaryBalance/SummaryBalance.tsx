import { FC, useContext, useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { CurrencyContext } from "context";
import { Rates } from "http/currency";
import { lightTheme } from "styles";
import { convertCurrency } from "utils";
import { FlowElements } from "typings";

interface SummaryBalanceProps {
  value?: number;
  icon: FlowElements;
  rates: Rates;
}

export const SummaryBalance: FC<SummaryBalanceProps> = ({ value = 0, icon, rates }) => {
  const { currency } = useContext(CurrencyContext);

  const convertedValue = useMemo(() => {
    return convertCurrency(currency.id, value, rates);
  }, [currency, value, rates]);

  const iconStyle = {
    color: "white",
    borderRadius: "50%",
    background: "#aaaaaa80",
    p: 0.5,
    mr: 0.5,
    fontSize: 12,
  };

  return (
    <Grid container item xs={6} alignItems="center">
      <Grid container alignItems="center" mb={1}>
        {icon !== FlowElements.EXPENSE ? <ArrowDownwardIcon sx={iconStyle} /> : <ArrowUpwardIcon sx={iconStyle} />}
        <Typography fontSize={12}>{icon.toUpperCase()}</Typography>
      </Grid>
      <Typography fontWeight={lightTheme.typography.fontWeightBold} sx={{ ml: 0.5 }}>
        {convertedValue} {currency.id}
      </Typography>
    </Grid>
  );
};
