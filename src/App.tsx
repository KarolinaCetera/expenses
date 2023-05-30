import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { RoutesComponent } from "components";
import { CurrencyContext } from "context";
import { lightTheme } from "styles";
import { defaultCurrency } from "./consts";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import { LocalizationProvider } from "@mui/x-date-pickers";

const queryClient = new QueryClient();

export const App = () => {
  const [currency, setCurrency] = useState(defaultCurrency);
  const currencyValue = { currency, setCurrency: setCurrency };

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={lightTheme}>
          <SnackbarProvider>
            <CurrencyContext.Provider value={currencyValue}>
              <Grid
                container
                justifyContent="space-between"
                sx={() => ({
                  maxHeight: "100vh",
                  width: "100vw",
                  maxWidth: "100vw",
                })}
              >
                <RoutesComponent />
              </Grid>
            </CurrencyContext.Provider>
          </SnackbarProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};
