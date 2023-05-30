import {
  CalendarMonthOutlined as CalendarMonthIcon,
  CategoryOutlined as CategoryIcon,
  HomeOutlined as HomeIcon,
  SettingsOutlined as SettingsIcon,
} from "@mui/icons-material";
import { Categories, Challenges, Home, Monthly, Settings, Category } from "components";

export type AppRoute = {
  name: string;
  icon?: JSX.Element;
  path: string;
  element: JSX.Element;
  position?: string;
};

export const routes: AppRoute[] = [
  {
    name: "Home",
    icon: <HomeIcon fontSize="medium" />,
    path: "/",
    element: <Home />,
    position: "left",
  },
  {
    name: "Categories",
    icon: <CategoryIcon fontSize="medium" />,
    path: "/categories",
    element: <Categories />,
    position: "left",
  },
  { name: "Category", path: "/categories/:id", element: <Category /> },
  {
    name: "Monthly",
    icon: <CalendarMonthIcon fontSize="medium" />,
    path: "/monthly",
    element: <Monthly />,
    position: "right",
  },
  { name: "Challenges", path: "/challenges", element: <Challenges /> },
  {
    name: "Settings",
    icon: <SettingsIcon fontSize="medium" />,
    path: "/settings",
    element: <Settings />,
    position: "right",
  },
];
