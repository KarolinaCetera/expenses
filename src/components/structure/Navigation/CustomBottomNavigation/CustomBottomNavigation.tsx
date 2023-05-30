import React, { FC } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AppRoute } from "routes";

interface CustomBottomNavigationProps {
  pathname: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  navSide: AppRoute[];
}

export const CustomBottomNavigation: FC<CustomBottomNavigationProps> = ({ pathname, onChange, navSide }) => (
  <BottomNavigation
    value={pathname}
    showLabels={false}
    onChange={onChange}
    sx={{
      width: "100%",
      alignItems: "center",
      justifyContent: "space-evenly",
      "& .Mui-selected, .Mui-selected > svg": {
        color: "#5879fe",
      },
    }}
  >
    {navSide.map((route) => (
      <BottomNavigationAction
        sx={{ p: 0, maxWidth: "20%", minWidth: "20%" }}
        key={route.name}
        icon={route.icon}
        showLabel={false}
        value={route.path}
      />
    ))}
  </BottomNavigation>
);
