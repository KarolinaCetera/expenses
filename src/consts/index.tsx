import { format } from "date-fns";
import { CategoryType, Currency, ElementCategoryName, FlowElements, UserFlow } from "typings";
import WorkIcon from "@mui/icons-material/Work";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const currentDate = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

export const getExpenseMonth = (month: number, year: number) => `${format(new Date(`${month} 1`), "LLLL")} ${year}`;

export const defaultCurrency: Currency = { id: "USD" };
export const currencies: Currency[] = [{ id: "EUR" }, { id: "PLN" }, { id: "USD" }, { id: "GBP" }];

// TODO add optional notes to flow element

export const categories: CategoryType[] = [
  {
    name: ElementCategoryName.WORK,
    color: "#B1835D",
    icon: <WorkIcon />,
  },
  {
    name: ElementCategoryName.FUN,
    color: "#2CD7D4",
    icon: <CelebrationIcon />,
  },
  {
    name: ElementCategoryName.OTHER,
    color: "#E17D7B",
    icon: <HdrStrongIcon />,
  },
  {
    name: ElementCategoryName.CAR,
    color: "#79323D",
    icon: <DriveEtaIcon />,
  },
  {
    name: ElementCategoryName.BILLS,
    color: "#7d7abe",
    icon: <CreditCardIcon />,
  },
  {
    name: ElementCategoryName.SHOPPING,
    color: "#B39348",
    icon: <ShoppingBagIcon />,
  },
];

export const userFlow: UserFlow = {
  income: [
    {
      date: new Date("2023-03-02"),
      name: "Paycheck March",
      amount: 2000,
      currency: defaultCurrency.id,
      type: FlowElements.INCOME,
      category: ElementCategoryName.WORK,
    },
    {
      date: new Date("2023-02-27"),
      name: "Paycheck February",
      amount: 1800,
      currency: defaultCurrency.id,
      type: FlowElements.INCOME,
      category: ElementCategoryName.WORK,
    },
    {
      date: new Date("2023-01-02"),
      name: "Paycheck February",
      amount: 2500,
      currency: defaultCurrency.id,
      type: FlowElements.INCOME,
      category: ElementCategoryName.WORK,
    },
    {
      date: new Date("2023-01-11"),
      name: "Gift from Laura",
      amount: 100,
      currency: defaultCurrency.id,
      type: FlowElements.INCOME,
      category: ElementCategoryName.OTHER,
    },
    {
      date: new Date("2023-02-04"),
      name: "Return payment",
      amount: 50,
      currency: defaultCurrency.id,
      type: FlowElements.INCOME,
      category: ElementCategoryName.OTHER,
    },
    {
      date: new Date("2023-03-08"),
      name: "Women's day gift",
      amount: 42,
      currency: defaultCurrency.id,
      type: FlowElements.INCOME,
      category: ElementCategoryName.OTHER,
    },
    {
      date: new Date("2023-02-14"),
      name: "Crypto sell",
      amount: 400,
      currency: defaultCurrency.id,
      type: FlowElements.INCOME,
      category: ElementCategoryName.OTHER,
    },
  ],
  expense: [
    {
      date: new Date("2023-03-02"),
      name: "Bowie CD",
      amount: 10,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.FUN,
    },
    {
      date: new Date("2023-02-13"),
      name: "Jeans",
      amount: 50,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.SHOPPING,
    },
    {
      date: new Date("2023-02-11"),
      name: "Escape room",
      amount: 50,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.FUN,
    },
    {
      date: new Date("2023-03-09"),
      name: "Soccer boots",
      amount: 200,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.SHOPPING,
    },
    {
      date: new Date("2023-01-07"),
      name: "Pizza with Tom",
      amount: 20,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.FUN,
    },
    {
      date: new Date("2023-01-27"),
      name: "Grocery in Lidl",
      amount: 20,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.SHOPPING,
    },
    {
      date: new Date("2023-01-18"),
      name: "Bowie CDs",
      amount: 80,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.FUN,
    },
    {
      date: new Date("2023-01-19"),
      name: "NodeJS course",
      amount: 80,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.SHOPPING,
    },
    {
      date: new Date("2023-01-04"),
      name: "Ukulele strings",
      amount: 80,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.SHOPPING,
    },
    {
      date: new Date("2023-01-23"),
      name: "AirPods Pro 2",
      amount: 300,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.SHOPPING,
    },
    {
      date: new Date("2023-02-19"),
      name: "Engine check",
      amount: 80,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.CAR,
    },
    {
      date: new Date("2023-01-02"),
      name: "Electricity",
      amount: 20,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.BILLS,
    },
    {
      date: new Date("2023-03-02"),
      name: "Electricity",
      amount: 20,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.BILLS,
    },
    {
      date: new Date("2023-03-01"),
      name: "Tickets to museum",
      amount: 120,
      currency: defaultCurrency.id,
      type: FlowElements.EXPENSE,
      category: ElementCategoryName.OTHER,
    },
  ],
};
