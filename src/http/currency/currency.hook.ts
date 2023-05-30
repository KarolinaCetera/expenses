import { useQuery } from "react-query";
import { CurrencyExchangeResponse, getCurrencyExchange } from "http/currency";

export const useCurrencyConverter = () =>
  useQuery<CurrencyExchangeResponse, Error>(["currency"], () => getCurrencyExchange());
