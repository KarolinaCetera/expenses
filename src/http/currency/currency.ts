import { CurrencyExchangeResponse } from "./type";

// TODO create env
const currencyAPIKey = "hAxjjpu61FRmSJwG5XyhVBMdRvahKsCwSZZhoTMh";
const currencyAPIUrl = "https://api.freecurrencyapi.com/v1/latest";

export const getCurrencyExchange = async (): Promise<CurrencyExchangeResponse> => {
  const response = await fetch(currencyAPIUrl, {
    method: "GET",
    headers: {
      apikey: currencyAPIKey,
    },
  });

  return response.json();
};
