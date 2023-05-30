export type CurrencyConverterParams = {
  to: string;
  amount: number;
};

export type CurrencyConverterResponse = {
  date: Date;
  info: {
    timestamp: number;
  };
  result: number;
};

export type Rates = {
  EUR: number;
  GBP: number;
  PLN: number;
  USD: number;
};

export type CurrencyExchangeResponse = {
  data: Rates;
};
