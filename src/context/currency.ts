import { createContext } from "react";
import { defaultCurrency } from "consts";
import { Rates } from "http/currency";

export const CurrencyContext = createContext({
  currency: defaultCurrency,
  setCurrency: ({ id }: { id: keyof Rates }) => {},
});
