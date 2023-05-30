import { FC, useContext, useMemo, useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { format } from "date-fns";
import { CurrencyModal } from "components";
import { CurrencyContext } from "context";
import { Rates } from "http/currency";
import { lightTheme } from "styles";
import { convertCurrency } from "utils";

interface MonthProps {
  rates?: Rates;
  monthBudget: number;
}

export const SummaryMonth: FC<MonthProps> = ({ rates, monthBudget }) => {
  const { currency } = useContext(CurrencyContext);

  const currentMonth = format(new Date(), "LLLL");
  const currentYear = new Date().getFullYear();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [currencyModalOpen, setCurrencyModalOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setCurrencyModalOpen(() => !currencyModalOpen);
  };

  const convertedBudget = useMemo(() => {
    return convertCurrency(currency.id, monthBudget, rates);
  }, [currency, monthBudget, rates]);

  return (
    <>
      <CurrencyModal open={currencyModalOpen} setOpen={setCurrencyModalOpen} anchorEl={anchorEl} />
      <Grid mb={2}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography sx={{ mb: 1 }} fontSize={14} fontWeight={lightTheme.typography.fontWeightBold}>
            <Typography component="span" sx={{ fontSize: 12 }}>
              My budget for
            </Typography>{" "}
            {currentMonth} {currentYear}
          </Typography>
          <IconButton sx={{ p: 0 }} onClick={handleClick}>
            {currencyModalOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
          </IconButton>
        </Grid>
        <Typography fontSize={24} variant="h4" fontWeight={lightTheme.typography.fontWeightBold} letterSpacing={1}>
          {convertedBudget} {currency.id}
        </Typography>
      </Grid>
    </>
  );
};
