import { FC, useContext } from "react";
import { Fade, Grid, MenuItem, Paper, Popper, Select, SelectChangeEvent } from "@mui/material";
import { currencies } from "consts";
import { CurrencyContext } from "context";
import { Rates } from "http/currency";

interface CurrencyModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  anchorEl: HTMLButtonElement | null;
}

export const CurrencyModal: FC<CurrencyModalProps> = ({ open, setOpen, anchorEl }) => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition sx={{ width: 100, height: 50 }}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper elevation={3}>
            <Grid container>
              <Select
                sx={{
                  p: 0,
                  fontSize: 12,
                  ".MuiPaper-root": {
                    width: 100,
                    fontSize: 12,
                  },
                }}
                fullWidth
                MenuProps={{
                  sx: {
                    ".MuiMenuItem-root": { fontSize: 12 },
                  },
                }}
                value={currency.id}
                label="Currency"
                onChange={(e: SelectChangeEvent) => {
                  setCurrency({ id: e.target.value as keyof Rates });
                  setOpen(!open);
                }}
              >
                {currencies.map(({ id }) => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};
