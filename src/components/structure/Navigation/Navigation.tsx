import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { AddExpenseButton, CustomBottomNavigation, ElementModal } from "components";
import { AppRoute, routes } from "routes";

export const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onChange = (event: React.SyntheticEvent, newValue: string) => navigate(newValue);

  const [elementModalOpen, setElementModalOpen] = useState<boolean>(false);

  const { left, right } = routes
    .filter((route) => route.position)
    .reduce(
      (previousValue, route) => {
        if (route.position === "left") previousValue.left.push(route);
        else previousValue.right.push(route);

        return previousValue;
      },
      {
        left: [] as AppRoute[],
        right: [] as AppRoute[],
      },
    );

  return (
    <>
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "10%",
          position: "fixed",
          bottom: 0,
          zIndex: "4",
          background: "white",
          boxShadow: "0px 0px 24px 0px rgba(109, 116, 191, 1)",
        }}
      >
        <CustomBottomNavigation pathname={pathname} onChange={onChange} navSide={left} />
        <AddExpenseButton onClick={() => setElementModalOpen(true)} />
        <CustomBottomNavigation pathname={pathname} onChange={onChange} navSide={right} />
      </Box>
      <ElementModal open={elementModalOpen} setElementModalOpen={setElementModalOpen} />
    </>
  );
};
